import React from "react";
import { Link } from "react-router-dom";

const PostmanCollectionPage: React.FC = () => {
  return (
    <div className="postman-page">
      <nav className="page-nav">
        <div className="container">
          <Link to="/" className="nav-home">
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      <div className="container">
        <header className="page-header">
          <h1>Automate your UI data with Postman Collection Runs</h1>
          <p className="page-subtitle">
            Streamline your UI workflow and eliminate manual data entry with
            powerful automation techniques in Postman.
          </p>
        </header>

        <section className="content-section">
          <div className="intro-card">
            <p className="personal-intro">
              Postman is a tool for backend API testing, however it can also be
              leveraged to automate front end data population. For any
              application that relies on API data, setting up automated data
              population can save a significant amount of time and effort.
              Postman has a rich feature set which includes{" "}
              <strong>Postman Collection Runner</strong>. This feature allows
              you to run a series of API calls in a specific order, when
              combined with pre and post script variables, it is incredibly
              powerful. <em>It's truly a game changer.</em> Let me guide you
              through the setup.
            </p>
          </div>

          <div className="overview-section">
            <h2>The 3 Step Overview</h2>
            <div className="steps-grid">
              <a href="#step1" className="step-card step-link">
                <div className="step-number">1</div>
                <h3>Create a runner collection</h3>
                <p>
                  Create a collection of API endpoints to call. These calls will
                  run sequentially.
                </p>
              </a>
              <a href="#step2" className="step-card step-link">
                <div className="step-number">2</div>
                <h3>Set up Pre/Post scripts</h3>
                <p>
                  Configure scripts to populate single and shared data between
                  requests.
                </p>
              </a>
              <a href="#step3" className="step-card step-link">
                <div className="step-number">3</div>
                <h3>Run your collection</h3>
                <p>
                  Execute the collection and watch your data populate
                  automatically.
                </p>
              </a>
            </div>
          </div>

          <div id="step1" className="tutorial-section">
            <h2>Step 1: Create the Runner Collection</h2>
            <div className="tutorial-content">
              <p>
                From Postman, create a collection or a folder of the API calls
                that you need to populate your data. These calls will run
                sequentially. It is important to order them in the same sequence
                as your front end if the calls are dependent on each other.
              </p>
            </div>
          </div>

          <div id="step2" className="tutorial-section">
            <h2>Step 2: Set up Pre/Post Scripts</h2>
            <div className="tutorial-content">
              <p>
                This is where the magic happens. Pre-scripts run before your
                request, and post-scripts run after receiving the response. Use
                them to manipulate variables and pass data between requests.
              </p>
            </div>
          </div>

          <div id="step3" className="tutorial-section">
            <h2>Step 3: Run the Collection</h2>
            <div className="tutorial-content">
              <p>
                Execute your collection using the Collection Runner, and watch
                as your variables get populated and passed between requests
                automatically.
              </p>
            </div>
          </div>

          <div className="example-section">
            <h2>Pokemon Runner Variable Scripts Example</h2>
            <p className="example-intro">
              Let's walk through a practical example using the Pokemon API to
              demonstrate how variables flow between requests:
            </p>

            <div className="api-call">
              <h3>1. Initial API Call</h3>
              <div className="endpoint">
                <code>GET https://pokeapi.co/api/v2/pokemon</code>
              </div>

              <h4>Pre Script: Clear out Variables</h4>
              <pre className="code-block">
                {`pm.collectionVariables.unset("randomPokemonName");
pm.collectionVariables.unset("randomPokemonAbility");`}
              </pre>

              <h4>Post Script: Set Variables</h4>
              <pre className="code-block">
                {`// Check if the response was successful (HTTP 200)
if (pm.response.code === 200) {
    // Parse the JSON response body
    const responseJson = pm.response.json();
    
    // Access the array of results
    const resultsArray = responseJson.results; 
    
    // Check if the array is not empty
    if (resultsArray && resultsArray.length > 0) {
        // Generate a random index and get that name from the array 
        const randomIndex = Math.floor(Math.random() * resultsArray.length);
        const pokemonName = resultsArray[randomIndex]?.name;
        
        // Set the collectionVariables variable
        pm.collectionVariables.set("randomPokemonName", pokemonName);
    }
}`}
              </pre>
            </div>

            <div className="api-call">
              <h3>2. Use the Results in the Next Call</h3>
              <div className="endpoint">
                <code>
                  GET https://pokeapi.co/api/v2/pokemon/
                  {"{{randomPokemonName}}"}
                </code>
              </div>

              <h4>Post Script: Set the Ability Variable</h4>
              <pre className="code-block">
                {`// Check if the response was successful (HTTP 200)
if (pm.response.code === 200) {
    const responseJson = pm.response.json();

    const resultsArray = responseJson.abilities; 
    
    // Check if the array is not empty
    if (resultsArray && resultsArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * resultsArray.length);
        const pokemonAbility = resultsArray[randomIndex].ability.name;
        
        // Set the collectionVariables variable
        pm.collectionVariables.set("randomPokemonAbility", pokemonAbility);
    }
}`}
              </pre>
            </div>

            <div className="api-call">
              <h3>3. Final Call Using Both Variables</h3>
              <div className="endpoint">
                <code>
                  GET https://pokeapi.co/api/v2/ability/
                  {"{{randomPokemonAbility}}"}
                </code>
              </div>

              <h4>Post Script: Display Results (Optional)</h4>
              <pre className="code-block">
                {`// --- 1. Gather Data ---
const responseJson = pm.response.json();

// 1a. Get data from Postman Variables (using the 'or' operator for a safe default)
const pokemonName = pm.collectionVariables.get("randomPokemonName") || "Bulbasaur";

// 1b. Read Ability Name and ID from the response
const abilityName = responseJson.name;
const abilityId = responseJson.id;

// 1c. Filter for the English effect entry (the main short description)
const englishEffectEntry = responseJson.effect_entries.find(entry => entry.language.name === "en");

// 1d. Filter for the latest English flavor text (the long description)
// We reverse the array and find the first English entry, which is usually the newest/latest
const latestFlavorTextEntry = responseJson.flavor_text_entries
    .reverse()
    .find(entry => entry.language.name === "en");

// 1e. Clean and combine the required data into a single object
const standardizedOutput = {
    // 1. Pokémon Name (from previous request)
    "Pokemon Name": pokemonName, 
    // 2. Ability Name (from current request)
    "Ability": abilityName,
    // 4. Short Effect Text (from effect_entries)
    "Effect": englishEffectEntry ? englishEffectEntry.short_effect : "N/A",
    // 5. Flavor Text (long description)
    "Additional Info": latestFlavorTextEntry ? latestFlavorTextEntry.flavor_text.replace(/\\n/g, ' ').trim() : "N/A"
};

// --- 2. Log to Console for Runner Output ---
// Log a separator for easy finding
console.log("⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐");

for (const [key, value] of Object.entries(standardizedOutput)) {
    // Log the key and the value separated by a colon
    console.log(\`\${key}: \${value}\`);
}
console.log("⭐⭐⭐⭐⭐⭐⭐");`}
              </pre>
            </div>
          </div>

          <div className="getting-started">
            <h3>Ready to Transform Your Workflow?</h3>
            <p>
              This Pokemon example demonstrates the power of chaining API calls
              with variable passing. Apply these same principles to your own
              APIs to automate data population for your applications.
            </p>

            <div className="action-buttons">
              <a
                href="https://github.com/webwolf2112/postman-collection-runner"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                📖 View Full Documentation
              </a>
              <a
                href="https://github.com/webwolf2112/postman-collection-runner/blob/main/examples"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-large"
              >
                📁 Download Examples
              </a>
            </div>
          </div>

          <div className="tech-stack">
            <h3>Technologies Covered</h3>
            <div className="tech-tags">
              <span className="tech-tag">Postman</span>
              <span className="tech-tag">Newman</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">API Testing</span>
              <span className="tech-tag">CI/CD</span>
              <span className="tech-tag">GitHub Actions</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Environment Management</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostmanCollectionPage;
