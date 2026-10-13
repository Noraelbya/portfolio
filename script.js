const projectsButton = document.getElementById("projects-button");
if (projectsButton) {
    projectsButton.addEventListener("click", () => {
        window.location.href =
            "projects.html";
    });
}
const originalHTML = new WeakMap();
const originalAttributes = new WeakMap();
const originalDocumentTitle = document.title;
function localizeElement(element, englishHTML, language) {
    if (!element) {
        return;
    }
    if (!originalHTML.has(element)) {
        originalHTML.set(element, element.innerHTML);
    }
    if (language === "fr") {
        element.innerHTML =
            originalHTML.get(element);
    }
    else {
        element.innerHTML =
            englishHTML;
    }
}
function localize(selector, englishHTML, language, root = document) {
    const element = root.querySelector(selector);
    localizeElement(element, englishHTML, language);
}
function localizeArray(elements, englishValues, language) {
    elements.forEach((element, index) => {
        if (englishValues[index] !==
            undefined) {
            localizeElement(element, englishValues[index], language);
        }
    });
}
function localizeAttribute(element, attribute, englishValue, language, frenchOverride = null) {
    if (!element) {
        return;
    }
    if (!originalAttributes.has(element)) {
        originalAttributes.set(element, {});
    }
    const saved = originalAttributes.get(element);
    if (!(attribute in saved)) {
        saved[attribute] =
            element.getAttribute(attribute);
    }
    if (language === "fr") {
        element.setAttribute(attribute, frenchOverride ??
            saved[attribute] ??
            "");
    }
    else {
        element.setAttribute(attribute, englishValue);
    }
}
function localizeTitle(englishTitle, language) {
    document.title =
        language === "fr"
            ? originalDocumentTitle
            : englishTitle;
}
function translateNavigation(language) {
    localize('.main-nav > a[href="about.html"]', "About", language);
    localize('.main-nav > a[href="contact.html"]', "Contact", language);
    localize('.menu-column a[href="econometrics.html"]', "Econometrics", language);
    localize('.menu-column a[href="time-series.html"]', "Time Series", language);
    localize('.menu-column a[href="research.html"]', "Research & networks", language);
    if (projectsButton) {
        localizeElement(projectsButton, `
                Projects
                <span class="arrow">⌄</span>
            `, language);
    }
    const menuTitles = document.querySelectorAll(".menu-title");
    if (menuTitles[0]) {
        localizeElement(menuTitles[0], "Analysis & modelling", language);
    }
    if (menuTitles[1]) {
        localizeElement(menuTitles[1], "Applications & research", language);
    }
}
function translateHome(language) {
    const page = document.querySelector(".hero");
    if (!page) {
        return;
    }
    localize(".eyebrow", `
            <span></span>
            UNDERSTAND, ANALYZE, DECIDE
        `, language);
    localize(".hero h1", `
            Turning<br>
            data into<br>
            <em>useful decisions</em>
        `, language);
    localize(".hero-description", "I like starting with a question, finding the data needed and using statistics and machine learning to try to answer it. I am particularly interested in network dynamics and how networks evolve after a shock, with the aim of exploring applications across different fields.", language);
    localize(".hero-actions .primary-button", `
            View my projects
            <span>→</span>
        `, language);
    localize(".panel-label", `
            <span></span>
            DISCOVER
        `, language);
    localize(".panel-intro > p", "From economic analysis to new applications of data, particularly in sport, I share my projects, methods and the questions I would like to explore further.", language);
    const panelLinks = document.querySelectorAll(".panel-links a");
    const labels = [
        "MODELLING",
        "MACHINE LEARNING",
        "DATA PRODUCTS",
        "RESEARCH & NETWORKS"
    ];
    const titles = [
        "Econometrics & time series",
        "Predictive models & evaluation",
        "From data to analysis",
        "Network dynamics & shocks"
    ];
    panelLinks.forEach((link, index) => {
        localize("span", labels[index], language, link);
        localize("strong", titles[index], language, link);
    });
}
function translateAbout(language) {
    const page = document.querySelector(".about-page");
    if (!page) {
        return;
    }
    localize(".about-intro .page-label", "ABOUT", language, page);
    localize(".about-intro h1", `
            Numbers, yes.<br>
            But above all,<br>
            <em>what they tell us</em>
        `, language, page);
    const introTexts = page.querySelectorAll(".about-text p");
    localizeArray(introTexts, [
        "What I like about data is being able to start with a question, find the necessary data and try to answer it through statistical analysis.",
        "As a second-year Master’s student in Econometrics and Statistics on a research track, I am developing my skills in econometrics, machine learning and programming with Python and R. I enjoy building models as much as understanding their results, their limitations and what they can actually tell us."
    ], language);
    localize(".about-explore .explore-heading p", "WHAT I AM CURRENTLY EXPLORING", language, page);
    const exploreItems = page.querySelectorAll(".explore-item");
    const exploreTitles = [
        "Networks & shocks",
        "Data & decision-making",
        "Econometrics & causality"
    ];
    const exploreTexts = [
        "As part of my research dissertation, I am interested in how networks evolve after a shock: which links disappear, which ones emerge and how actors adapt to these changes.",
        "Finding data, building my own datasets, testing different methods and turning results into useful analyses to understand situations and support decisions.",
        "Understanding relationships between variables, distinguishing correlation from causation and using econometric methods to study real economic phenomena."
    ];
    exploreItems.forEach((item, index) => {
        localize("h2", exploreTitles[index], language, item);
        localize("p:last-child", exploreTexts[index], language, item);
    });
    localize(".interest-section .explore-heading p", "FIELDS I AM INTERESTED IN", language, page);
    localize(".interest-intro", "Fields I would like to explore further through my projects and research.", language, page);
    const interestItems = page.querySelectorAll(".interest-item");
    const interestTitles = [
        "Sports economics",
        "Finance & risk",
        "Energy"
    ];
    const interestTexts = [
        "Club business models, sponsorship, transfer markets and performance analysis. At the moment, I am particularly interested in football.",
        "Volatility, interdependencies and the propagation of shocks during financial crises.",
        "Energy markets, price dynamics and the transmission of economic shocks."
    ];
    interestItems.forEach((item, index) => {
        localize("h2", interestTitles[index], language, item);
        localize("p", interestTexts[index], language, item);
    });
}
function translateProjects(language) {
    const page = document.querySelector(".projects-page");
    if (!page) {
        return;
    }
    localize(".projects-intro .page-label", "PROJECTS", language, page);
    localize(".projects-intro h1", `
            From methods to<br>
            <em>real questions</em>
        `, language, page);
    localize(".projects-intro-text", "Econometrics, time series, machine learning and research: this is where I bring together the analyses, methods and projects I develop along the way.", language, page);
    const cards = page.querySelectorAll(".project-category");
    const cardsData = [
        {
            type: "MODELLING",
            title: "Econometrics &<br>time series",
            description: "Modelling economic relationships, testing hypotheses and understanding how data evolve over time.",
            tags: [
                "OLS",
                "Panel Data",
                "Time Series",
                "R"
            ]
        },
        {
            type: "MACHINE LEARNING",
            title: "Prediction &<br>methods",
            description: "Building and comparing predictive models, evaluating their performance and understanding their limitations.",
            tags: [
                "Python",
                "Prediction",
                "Random Forest",
                "Conformal Prediction"
            ]
        },
        {
            type: "DATA PRODUCTS",
            title: "From data<br>to action",
            description: "Turning raw data into analyses, visualisations and simple tools that make information easier to understand and use.",
            tags: [
                "Data",
                "Visualisation",
                "Decision",
                "Dashboards"
            ]
        },
        {
            type: "RESEARCH & NETWORKS",
            title: "Questions I<br>explore",
            description: "Understanding how economic networks react to shocks and how their structures evolve and reorganise over time.",
            tags: [
                "Networks",
                "Shocks",
                "Resilience"
            ]
        }
    ];
    cards.forEach((card, index) => {
        const data = cardsData[index];
        if (!data) {
            return;
        }
        localize(".project-type", data.type, language, card);
        localize("h2", data.title, language, card);
        localize(".project-description", data.description, language, card);
        const tags = card.querySelectorAll(".project-tags span");
        localizeArray(tags, data.tags, language);
    });
    const econometricsLinks = page.querySelectorAll(".econometrics-project-links a");
    if (econometricsLinks[0]) {
        localize("span:first-child", "Energy & inflation in Europe", language, econometricsLinks[0]);
    }
    if (econometricsLinks[1]) {
        localize("span:first-child", "Internet Access & Life Satisfaction", language, econometricsLinks[1]);
    }
    localize(".featured-project-label", `
            <span></span>
            FEATURED PROJECT
        `, language, page);
    localize(".featured-category", "ECONOMETRICS · EUROSTAT · R", language, page);
    localize(".featured-project h2", "Energy and inflation<br>in Europe", language, page);
    const featuredTexts = page.querySelectorAll(".featured-project-text > p");
    localizeArray(featuredTexts, [
        "When energy prices rise, do other prices rise too?",
        "I analyse 5,184 observations covering the 27 countries of the European Union from 2010 to 2025 to study the relationship between energy inflation and inflation excluding energy.",
        "The results show that the two are clearly related, although a substantial part of this relationship is also explained by common factors affecting several countries at the same time."
    ], language);
    localize(".featured-project-text a", `
            Explore the analysis
            <span>→</span>
        `, language, page);
}
function translateEconometricsHub(language) {
    const page = document.querySelector(".econometrics-hub");
    if (!page) {
        return;
    }
    localizeTitle("Econometrics | Nora EL BYA", language);
    localize(".econ-hub-hero .page-label", "ECONOMETRICS & MODELLING", language, page);
    localize(".econ-hub-hero h1", `
            Understanding the relationships<br>
            <em>behind the data</em>
        `, language, page);
    localize(".econ-hub-intro", "I use econometrics to explore economic relationships using real-world data, compare different specifications and understand which relationships remain once additional factors are taken into account.", language, page);
    const cards = page.querySelectorAll(".econ-hub-card");
    if (cards[0]) {
        localize(".econ-hub-card-type", "ECONOMETRICS · PANEL DATA · EUROSTAT", language, cards[0]);
        localize("h2", `
                Energy & inflation
                <em>in Europe</em>
            `, language, cards[0]);
        localize(".econ-hub-description", "To what extent is energy inflation associated with inflation excluding energy across European Union countries?", language, cards[0]);
        localize(".econ-hub-result", `
                <strong>2010 — 2025 · 5,184 observations</strong><br>
                Regressions, country and time fixed effects,
                and dynamic lag analysis.
            `, language, cards[0]);
    }
    if (cards[1]) {
        localize(".econ-hub-card-type", "ECONOMETRICS · PANEL DATA · R", language, cards[1]);
        localize("h2", `
                Internet Access
                <em>& Life Satisfaction</em>
            `, language, cards[1]);
        localize(".econ-hub-description", "Is greater Internet access associated with higher life satisfaction across European countries?", language, cards[1]);
        localize(".econ-hub-result", `
                <strong>2013 — 2023 · 191 observations</strong><br>
                Data cleaning and merging,
                OLS and fixed-effects models.
            `, language, cards[1]);
    }
}
function translateEnergy(language) {
    const currentPage = window.location.pathname
        .split("/")
        .pop();
    if (currentPage !==
        "energy-inflation.html") {
        return;
    }
    const page = document.querySelector(".econ-page");
    if (!page) {
        return;
    }
    localizeTitle("Energy & inflation | Nora EL BYA", language);
    localize(".econ-hero .page-label", "ECONOMETRICS · PANEL DATA", language, page);
    localize(".econ-hero h1", `
            Energy and inflation<br>
            <em>in Europe</em>
        `, language, page);
    localize(".econ-question", "To what extent is energy inflation associated with inflation excluding energy in the European Union?", language, page);
    const meta = page.querySelectorAll(".econ-meta div");
    if (meta[0]) {
        localize("span", "PERIOD", language, meta[0]);
    }
    if (meta[1]) {
        localize("span", "COUNTRIES", language, meta[1]);
        localize("strong", "27 EU countries", language, meta[1]);
    }
    if (meta[2]) {
        localize("span", "OBSERVATIONS", language, meta[2]);
        localize("strong", "5,184", language, meta[2]);
    }
    if (meta[3]) {
        localize("span", "TOOLS", language, meta[3]);
    }
    const sections = page.querySelectorAll(".econ-section");
    if (sections[0]) {
        localize(".econ-section-title p", "THE QUESTION", language, sections[0]);
        localize("h2", "When energy becomes more expensive, does everything else follow?", language, sections[0]);
        localizeArray(sections[0]
            .querySelectorAll(".econ-columns > div p"), [
            "Higher energy prices do not only affect households directly. They can also increase firms’ costs: producing, transporting, heating or storing goods becomes more expensive.",
            "The idea behind this project is simple: to examine whether periods of high energy inflation are also associated with higher prices for other goods and services.",
            "To avoid a mechanical relationship, the analysis focuses mainly on <strong>inflation excluding energy</strong>."
        ], language);
    }
    if (sections[1]) {
        localize(".econ-section-title p", "WHAT HAPPENED?", language, sections[1]);
        localize("h2", "Energy prices move much more sharply", language, sections[1]);
        localizeArray(sections[1]
            .querySelectorAll(".econ-visual-text p"), [
            "Energy prices experience much stronger fluctuations than overall inflation.",
            "This is particularly visible around 2021–2023, when energy inflation rose sharply before falling back quickly.",
            "A first observation is that both measures often move in the same direction, but not with the same intensity."
        ], language);
    }
    if (sections[2]) {
        localize(".econ-section-title p", "ARE THE TWO RELATED?", language, sections[2]);
        localize("h2", "Yes, they tend to increase together", language, sections[2]);
        localizeArray(sections[2]
            .querySelectorAll(".econ-visual-text p"), [
            "Each point in the graph represents one month, calculated from the average of the 27 European Union countries.",
            "The relationship is upward-sloping: when energy inflation is higher, inflation excluding energy also tends to be higher.",
            "There is therefore a <strong>positive relationship</strong>. However, a relationship does not automatically mean that energy causes higher prices elsewhere."
        ], language);
    }
    if (sections[3]) {
        localize(".econ-section-title p", "DOES ENERGY REALLY EXPLAIN THIS RELATIONSHIP?", language, sections[3]);
        localize("h2", "Part of the relationship also comes from other factors", language, sections[3]);
        localizeArray(sections[3]
            .querySelectorAll(".econ-columns > div p"), [
            "At first glance, the result is clear: when energy inflation rises by <strong>1 percentage point</strong>, inflation excluding energy is associated with an increase of around <strong>0.084 percentage point</strong>.",
            "However, European countries are not identical. They can also be affected by the same events at the same time.",
            "I therefore repeated the analysis while accounting for differences between countries and for major events affecting several countries during the same period.",
            "The relationship remains positive, but falls to around <strong>0.030 percentage point</strong>.",
            "This suggests that a substantial part of the initial relationship also reflects broader factors beyond energy alone."
        ], language);
        const rows = sections[3]
            .querySelectorAll(".econ-table-row");
        if (rows[0]) {
            const headings = rows[0]
                .querySelectorAll("span");
            if (headings[0]) {
                localizeElement(headings[0], "Analysis", language);
            }
            if (headings[1]) {
                localizeElement(headings[1], "Estimated relationship", language);
            }
        }
        if (rows[1]) {
            localize("strong", "Raw relationship", language, rows[1]);
        }
        if (rows[2]) {
            localize("strong", "Country differences accounted for", language, rows[2]);
        }
        if (rows[3]) {
            localize("strong", "Countries + common time factors accounted for", language, rows[3]);
        }
        localize(".econ-highlight-text", "<strong>In short:</strong> energy is clearly related to movements in other prices, but the relationship becomes much weaker once broader factors are taken into account. Part of the increase in prices therefore appears to reflect factors beyond energy alone.", language, sections[3]);
    }
    if (sections[4]) {
        localize(".econ-section-title p", "DOES THE RELATIONSHIP LAST?", language, sections[4]);
        localize("h2", "Not really: the relationship is mainly contemporaneous", language, sections[4]);
        localizeArray(sections[4]
            .querySelectorAll(".econ-visual-text p"), [
            "I then examined whether higher energy inflation could still be related to other prices several months later.",
            "When the different lags are considered together, the positive relationship appears mainly <strong>in the same month</strong>.",
            "Between one and five months later, the estimates are no longer statistically significant.",
            "The results therefore do not show a clear positive transmission that continues progressively over several months."
        ], language);
    }
    localize(".econ-conclusion .page-label", "SO, DOES ENERGY CAUSE INFLATION?", language, page);
    localize(".econ-conclusion h2", `
            The relationship is clear,
            <em>the causality is not</em>
        `, language, page);
    localizeArray(page.querySelectorAll(".econ-conclusion > p:not(.page-label)"), [
        "<strong>What the data show:</strong> when energy inflation is higher, inflation excluding energy also tends to be higher. This relationship remains present even after accounting for other differences and common events.",
        "<strong>But this is not enough to conclude that energy directly causes inflation.</strong> Other factors may push energy prices and other prices up at the same time, such as supply pressures, international conditions, transport costs or other economic shocks.",
        "The main result is therefore simple: <strong>energy is related to inflation movements, but it is not their only explanation.</strong>"
    ], language);
}
function translateInternet(language) {
    const page = document.querySelector(".internet-page");
    if (!page) {
        return;
    }
    localizeTitle("Internet & well-being | Nora EL BYA", language);
    localize(".econ-hero .page-label", "ECONOMETRICS · PANEL DATA · R", language, page);
    localize(".econ-hero h1", `
            Internet Access<br>
            <em>& Life Satisfaction</em>
        `, language, page);
    localize(".econ-question", "Is greater Internet access associated with higher life satisfaction across European countries?", language, page);
    const meta = page.querySelectorAll(".econ-meta div");
    if (meta[0]) {
        localize("span", "PERIOD", language, meta[0]);
    }
    if (meta[1]) {
        localize("span", "UNIT", language, meta[1]);
        localize("strong", "Country · year", language, meta[1]);
    }
    if (meta[2]) {
        localize("span", "OBSERVATIONS", language, meta[2]);
    }
    if (meta[3]) {
        localize("span", "DATA & TOOL", language, meta[3]);
    }
    const sections = page.querySelectorAll(".econ-section");
    if (sections[0]) {
        localize(".econ-section-title p", "THE QUESTION", language, sections[0]);
        localize("h2", "Does digital connectivity go hand in hand with well-being?", language, sections[0]);
        localizeArray(sections[0]
            .querySelectorAll(".econ-columns > div p"), [
            "Internet access makes information, education, work and social interactions easier to reach. It may therefore contribute to well-being, although this relationship is not straightforward to measure.",
            "Internet access is already widespread across European countries. The aim is therefore to examine whether the remaining differences in connectivity are still associated with differences in life satisfaction.",
            "The analysis uses two Eurostat indicators: the share of households with Internet access and average life satisfaction, measured on a scale from 0 to 10."
        ], language);
    }
    if (sections[1]) {
        localize(".econ-section-title p", "DATA PREPARATION", language, sections[1]);
        localize("h2", "Two datasets merged at country-year level", language, sections[1]);
        localizeArray(sections[1]
            .querySelectorAll(".econ-columns > div p"), [
            "I first cleaned the Internet access and life satisfaction datasets separately by selecting the relevant variables, removing aggregate observations and handling missing values.",
            "The two datasets were then merged using <strong>country</strong> and <strong>year</strong>.",
            "The final dataset contains <strong>191 country-year observations</strong>. Across the full sample, average Internet access is approximately <strong>88.7%</strong> and average life satisfaction is <strong>7.1 out of 10</strong>."
        ], language);
    }
    if (sections[2]) {
        localize(".econ-section-title p", "EVOLUTION", language, sections[2]);
        localize("h2", "An increasingly connected Europe", language, sections[2]);
        localizeArray(sections[2]
            .querySelectorAll(".econ-columns > div p"), [
            "Average Internet access rises substantially over the period and reaches very high levels in most European countries.",
            "Life satisfaction changes much less. The two variables therefore do not mechanically follow the same trajectory."
        ], language);
        const images = sections[2]
            .querySelectorAll(".internet-graphs img");
        if (images[0]) {
            localizeAttribute(images[0], "alt", "Average evolution of Internet access", language);
        }
        if (images[1]) {
            localizeAttribute(images[1], "alt", "Average evolution of life satisfaction", language);
        }
    }
    if (sections[3]) {
        localize(".econ-section-title p", "RELATIONSHIP", language, sections[3]);
        localize(".econ-visual-text h2", "A positive association appears across countries", language, sections[3]);
        localizeArray(sections[3]
            .querySelectorAll(".econ-visual-text p"), [
            "When values are averaged by country, countries with higher Internet access also tend to report higher levels of life satisfaction.",
            "The relationship is positive, but the observations remain dispersed: connectivity alone therefore cannot explain differences in well-being across countries.",
            "When the analysis focuses only on changes within the same country over time, the relationship becomes much weaker."
        ], language);
        const image = sections[3]
            .querySelector(".econ-visual > img");
        localizeAttribute(image, "alt", "Relationship between Internet access and life satisfaction", language);
    }
    if (sections[4]) {
        localize(".econ-section-title p", "MODELS", language, sections[4]);
        localize("h2", "Does the relationship remain after adding controls?", language, sections[4]);
        localizeArray(sections[4]
            .querySelectorAll(".econ-columns > div p"), [
            "I compared three specifications: a simple OLS regression, a model with country fixed effects, and finally a model with both country and year fixed effects.",
            "The aim is to assess whether the positive relationship remains once country-specific characteristics and factors common to particular years are taken into account."
        ], language);
        const rows = sections[4]
            .querySelectorAll(".econ-table-row");
        if (rows[0]) {
            localizeArray(rows[0]
                .querySelectorAll("span"), [
                "Model",
                "Coefficient",
                "Std. error",
                "R²"
            ], language);
        }
        const rowNames = [
            "Simple OLS",
            "Country fixed effects",
            "Country + year"
        ];
        const rowValues = [
            ["0.038", "0.004", "0.284"],
            ["0.018", "0.002", "0.915"],
            ["0.027", "0.004", "0.924"]
        ];
        for (let i = 1; i <= 3; i++) {
            if (!rows[i]) {
                continue;
            }
            localize("strong", rowNames[i - 1], language, rows[i]);
            localizeArray(rows[i]
                .querySelectorAll("span"), rowValues[i - 1], language);
        }
        localize(".econ-highlight-text", "<strong>Interpretation:</strong> in the model with country and year fixed effects, a 1 percentage-point increase in Internet access is associated with approximately a 0.027-point increase in life satisfaction. The relationship remains positive, but it does not establish causality.", language, sections[4]);
    }
    if (sections[5]) {
        localize(".econ-section-title p", "INTERPRETATION", language, sections[5]);
        localize("h2", "A positive relationship, but one that requires caution", language, sections[5]);
        localizeArray(sections[5]
            .querySelectorAll(".econ-columns > div p"), [
            "All three models show a positive association between Internet access and life satisfaction.",
            "However, part of the initial relationship is explained by structural differences between countries and by factors that vary over time.",
            "The very high R² values in the fixed-effects models do not mean that Internet access alone explains more than 90% of well-being. A large part of that explanatory power comes from the fixed effects included in the model."
        ], language);
    }
    localize(".econ-conclusion .page-label", "WHAT I TAKE AWAY", language, page);
    localize(".econ-conclusion h2", `
            More connected,
            <em>not necessarily happier</em>
        `, language, page);
    localizeArray(page.querySelectorAll(".econ-conclusion > p:not(.page-label)"), [
        "Internet access is positively associated with life satisfaction across European countries, including after accounting for differences between countries and year-related effects.",
        "However, in an already highly connected Europe, Internet access alone cannot explain differences in well-being. Other economic, social and institutional dimensions probably play an important role.",
        "The analysis therefore identifies an <strong>association</strong>, not a causal effect of Internet access on life satisfaction."
    ], language);
}
function translateMachineLearning(language) {
    const page = document.querySelector(".ml-page");
    if (!page) {
        return;
    }
    localizeTitle("Machine Learning | Nora EL BYA", language);
    localize(".econ-hero .page-label", "MACHINE LEARNING · UCI · PYTHON", language, page);
    localize(".econ-hero h1", `
            Comparing models,<br>
            <em>to make better choices</em>
        `, language, page);
    localize(".econ-question", "Which model and uncertainty method offer the best trade-off between accuracy, reliability and computational cost?", language, page);
    const meta = page.querySelectorAll(".econ-meta div");
    if (meta[0]) {
        localize("span", "DATA", language, meta[0]);
    }
    if (meta[1]) {
        localize("span", "OBSERVATIONS", language, meta[1]);
        localize("strong", "4,177", language, meta[1]);
    }
    if (meta[2]) {
        localize("span", "MODELS", language, meta[2]);
    }
    if (meta[3]) {
        localize("span", "STATUS", language, meta[3]);
        localize("strong", "Project in progress", language, meta[3]);
    }
    const sections = page.querySelectorAll(".econ-section");
    if (sections[0]) {
        localize(".econ-section-title p", "THE OBJECTIVE", language, sections[0]);
        localize("h2", "Comparing predictions, not just algorithms", language, sections[0]);
        localizeArray(sections[0]
            .querySelectorAll(".econ-columns > div p"), [
            "The aim of this project is to compare several prediction methods on the same problem in order to understand what really matters when choosing one approach over another.",
            "The comparison is not based solely on the models’ average predictive accuracy. I also examine <strong>uncertainty around the predictions</strong> and identify methods that produce intervals that are both reliable and sufficiently precise.",
            "This approach goes beyond simply asking which model achieves the best score by also considering <strong>the reliability and computational cost of the method</strong>."
        ], language);
    }
    if (sections[1]) {
        localize(".econ-section-title p", "THE DATA", language, sections[1]);
        localize("h2", "Why use the Abalone dataset?", language, sections[1]);
        localizeArray(sections[1]
            .querySelectorAll(".econ-columns > div p"), [
            "I used the <strong>Abalone</strong> dataset from the UCI Machine Learning Repository, which contains 4,177 observations.",
            "Each observation describes an abalone using several physical characteristics: length, diameter, height, different weight measurements and sex.",
            "The target variable is <strong>Rings</strong>, the number of rings, which is used as an indicator of the animal’s age.",
            "This dataset is particularly suitable for comparing methods: it is a regression problem with several explanatory variables, one categorical variable and enough observations to create separate training, calibration and test sets."
        ], language);
    }
    if (sections[2]) {
        localize(".econ-section-title p", "DATA PREPARATION", language, sections[2]);
        localize("h2", "Separating training, calibration and evaluation", language, sections[2]);
        localizeArray(sections[2]
            .querySelectorAll(".econ-columns > div p"), [
            "The categorical variable corresponding to sex was first transformed so that it could be used by the models.",
            "The data were then divided into three sets: <strong>2,505 observations for training</strong>, <strong>836 for calibration</strong> and <strong>836 for testing</strong>.",
            "This split keeps the test data completely separate from training and provides a dedicated calibration set for constructing prediction intervals when required by the method."
        ], language);
    }
    if (sections[3]) {
        localize(".econ-section-title p", "FIRST COMPARISON", language, sections[3]);
        localize(".econ-visual-text h2", "A more complex model is not necessarily better", language, sections[3]);
        localizeArray(sections[3]
            .querySelectorAll(".econ-visual-text p"), [
            "I started by comparing two approaches: a <strong>linear regression</strong> and a <strong>Random Forest</strong>.",
            "Random Forest is more flexible and can capture nonlinear relationships. However, on this dataset, the additional complexity does not automatically improve prediction.",
            "The linear regression achieves an <strong>R² of 0.54</strong>, compared with <strong>0.52</strong> for the Random Forest.",
            "Both models capture the overall pattern relatively well, but their predictions become less accurate for observations with particularly high numbers of rings."
        ], language);
        const rows = sections[3]
            .querySelectorAll(".econ-table-row");
        if (rows[0]) {
            const headers = rows[0]
                .querySelectorAll("span");
            if (headers[0]) {
                localizeElement(headers[0], "Model", language);
            }
            if (headers[3]) {
                localizeElement(headers[3], "Interpretation", language);
            }
        }
        if (rows[1]) {
            localize("strong", "Linear regression", language, rows[1]);
            localizeArray(rows[1]
                .querySelectorAll("span"), [
                "2.23",
                "0.54",
                "Better accuracy"
            ], language);
        }
        if (rows[2]) {
            localizeArray(rows[2]
                .querySelectorAll("span"), [
                "2.27",
                "0.52",
                "Very similar result"
            ], language);
        }
        localize(".econ-highlight-text", "<strong>First takeaway:</strong> choosing a more complex model does not necessarily improve predictive performance. On this dataset, the linear regression remains slightly more accurate.", language, sections[3]);
    }
    if (sections[4]) {
        localize(".econ-section-title p", "BEYOND PREDICTION", language, sections[4]);
        localize("h2", "A point prediction is not always enough to make a decision", language, sections[4]);
        localizeArray(sections[4]
            .querySelectorAll(".econ-columns > div p"), [
            "A point prediction provides a single value, but it does not directly indicate how uncertain that estimate is.",
            "I therefore extended the comparison using several <strong>Conformal Prediction</strong> methods, which associate an interval with each prediction.",
            "The target is approximately <strong>90% coverage</strong>: the interval should contain the true value in around 90% of cases.",
            "But achieving 90% coverage is not enough. An extremely wide interval could be reliable but not very useful. Among reliable methods, I therefore look for those producing <strong>the narrowest intervals</strong>."
        ], language);
    }
    if (sections[5]) {
        localize(".econ-section-title p", "COMPARING METHODS", language, sections[5]);
        localize(".econ-visual-text h2", "Reliability first, precision second", language, sections[5]);
        localizeArray(sections[5]
            .querySelectorAll(".econ-visual-text p"), [
            "Several approaches were compared: <strong>Split Conformal</strong>, <strong>Jackknife</strong>, <strong>Jackknife+</strong> and <strong>CV Conformal</strong>.",
            "I use two criteria to select a method. It must first reach the 90% target coverage and then produce the narrowest possible average interval.",
            "With linear regression, <strong>Jackknife+</strong> currently offers the best trade-off: approximately <strong>90.2% coverage</strong> with an average width of around <strong>6.78</strong>.",
            "<strong>Random Forest with CV Conformal</strong> produces a very similar result, with approximately 90.3% coverage and an average width of 6.80."
        ], language);
    }
    if (sections[6]) {
        localize(".econ-section-title p", "INTERMEDIATE RESULTS", language, sections[6]);
        localize("h2", "Not all methods offer the same trade-off", language, sections[6]);
        localizeArray(sections[6]
            .querySelectorAll(".econ-columns > div p"), [
            "The results show that several methods achieve coverage close to the target, but with intervals of different widths.",
            "Split Conformal applied to the Random Forest, for example, remains slightly below the 90% coverage target.",
            "By contrast, Jackknife+ with linear regression combines sufficient coverage with the narrowest average interval among the methods currently compared."
        ], language);
        const rows = sections[6]
            .querySelectorAll(".econ-table-row");
        if (rows[0]) {
            localizeArray(rows[0]
                .querySelectorAll("span"), [
                "Method",
                "Model",
                "Coverage",
                "Width"
            ], language);
        }
        const conformalValues = [
            ["Linear", "90.6%", "6.98"],
            ["Linear", "90.2%", "6.80"],
            ["Linear", "90.2%", "6.78"],
            ["Linear", "90.2%", "6.82"],
            ["Random Forest", "89.4%", "6.96"],
            ["Random Forest", "90.3%", "6.80"]
        ];
        for (let i = 1; i <= 6; i++) {
            if (!rows[i]) {
                continue;
            }
            localizeArray(rows[i]
                .querySelectorAll("span"), conformalValues[i - 1], language);
        }
    }
    if (sections[7]) {
        localize(".econ-section-title p", "ANOTHER CONSTRAINT: COMPUTATION", language, sections[7]);
        localize("h2", "The best method also has to be feasible", language, sections[7]);
        localizeArray(sections[7]
            .querySelectorAll(".econ-columns > div p"), [
            "The comparison is not limited to statistical performance.",
            "Some methods, such as Jackknife, require the model to be retrained many times.",
            "With linear regression, this computational cost remains reasonable. With a Random Forest, the same procedure becomes much more computationally demanding.",
            "Jackknife with Random Forest was therefore not retained in the current final comparison. This constraint is part of the decision: a method must be <strong>accurate, reliable and practically usable</strong>."
        ], language);
    }
    if (sections[8]) {
        localize(".econ-section-title p", "PROJECT IN PROGRESS", language, sections[8]);
        localize("h2", "The comparison can still be extended", language, sections[8]);
        localizeArray(sections[8]
            .querySelectorAll(".econ-columns > div p"), [
            "The main models and several Conformal Prediction methods have already been compared.",
            "The current results make it possible to identify initial trade-offs between accuracy, coverage and computational cost.",
            "The project nevertheless remains open: some more computationally intensive methods can still be optimised or explored further, and the robustness of the conclusions can be tested under other configurations."
        ], language);
    }
    localize(".econ-conclusion .page-label", "WHAT I TAKE AWAY", language, page);
    localize(".econ-conclusion h2", `
            The best model is not necessarily
            <em>the most complex</em>
        `, language, page);
    localizeArray(page.querySelectorAll(".econ-conclusion > p:not(.page-label)"), [
        "On the Abalone dataset, linear regression achieves slightly better performance than Random Forest despite its much simpler structure.",
        "Adding Conformal Prediction also shows that a good choice cannot be based on a single metric: prediction accuracy, interval coverage, interval width and computational cost all need to be considered together.",
        "Among the methods tested so far, the combination of <strong>linear regression + Jackknife+</strong> offers the most attractive trade-off between reliability and interval precision."
    ], language);
}
function translateTimeSeries(language) {
    const page = document.querySelector(".ts-page");
    if (!page) {
        return;
    }
    localizeTitle("Time Series | Nora EL BYA", language);
    localize(".econ-hero .page-label", "TIME SERIES · PROJECT IN PROGRESS", language, page);
    localize(".econ-hero h1", `
            Understanding the past,<br>
            <em>to better forecast the future</em>
        `, language, page);
    localize(".econ-question", "How can the dynamics of a time series be identified, an appropriate model selected, and its ability to forecast future observations evaluated?", language, page);
    const meta = page.querySelectorAll(".econ-meta div");
    const metaLabels = [
        "FIELD",
        "OBJECTIVE",
        "METHODS",
        "STATUS"
    ];
    const metaValues = [
        "Time Series",
        "Modelling & forecasting",
        "AR · ARMA · nonlinear models",
        "In progress"
    ];
    meta.forEach((item, index) => {
        localize("span", metaLabels[index], language, item);
        localize("strong", metaValues[index], language, item);
    });
    const sections = page.querySelectorAll(".econ-section");
    if (sections[0]) {
        localize(".econ-section-title p", "THE OBJECTIVE", language, sections[0]);
        localize("h2", "A time series carries its own history", language, sections[0]);
        localizeArray(sections[0]
            .querySelectorAll(".econ-columns > div p"), [
            "Unlike independent observations, a time series has a structure: what happens today may depend on what happened in the past.",
            "The aim of the project is to start from a series observed over time, identify its dynamics and then build a model capable of reproducing that structure.",
            "The final step is to check whether the selected model can actually produce useful forecasts for new observations."
        ], language);
    }
    if (sections[1]) {
        localize(".econ-section-title p", "MY APPROACH", language, sections[1]);
        localize(".econ-columns h2", "From identification to forecasting", language, sections[1]);
        localizeArray(sections[1]
            .querySelectorAll(".econ-columns > div p"), [
            "I progressively build the analysis by separating the problem into several stages: understanding the series, identifying a model, checking its quality and then evaluating its predictive performance.",
            "This approach avoids selecting a model simply because it appears to fit past observations well."
        ], language);
        const steps = sections[1]
            .querySelectorAll(".ts-step");
        const stepTitles = [
            "Observe",
            "Identify",
            "Diagnose",
            "Forecast"
        ];
        const stepTexts = [
            "Examine the dynamics of the series and identify possible structures.",
            "Test different structures and select relevant lags.",
            "Check that the residuals do not retain important structure.",
            "Compare forecasts with the values actually observed."
        ];
        steps.forEach((step, index) => {
            localize("strong", stepTitles[index], language, step);
            localize("p", stepTexts[index], language, step);
        });
    }
    if (sections[2]) {
        localize(".econ-section-title p", "MODELS EXPLORED", language, sections[2]);
        localize(".econ-columns h2", "Start simple, then test for nonlinearity", language, sections[2]);
        localizeArray(sections[2]
            .querySelectorAll(".econ-columns > div p"), [
            "The analysis begins with linear models in order to establish a simple benchmark before potentially introducing more complex dynamics.",
            "The objective is not to use the most sophisticated model, but to determine whether the additional complexity genuinely improves the description of the series or its forecasts."
        ], language);
        const methods = sections[2]
            .querySelectorAll(".ts-method");
        if (methods[0]) {
            localize("span", "LINEAR MODELS", language, methods[0]);
            localize("p", "Model the dependence between an observation and its past values, then select an appropriate structure from the data.", language, methods[0]);
        }
        if (methods[1]) {
            localize("span", "NONLINEAR MODELS", language, methods[1]);
            localize("p", "Explore whether the dynamics change according to the level of the series or across different regimes.", language, methods[1]);
        }
    }
    if (sections[3]) {
        localize(".econ-section-title p", "HOW TO CHOOSE?", language, sections[3]);
        localize("h2", "A good fit is not enough", language, sections[3]);
        localizeArray(sections[3]
            .querySelectorAll(".econ-columns > div p"), [
            "Several models may appear to represent a series adequately on the data used for estimation.",
            "I therefore compare specifications using criteria such as <strong>AIC and BIC</strong>, as well as through residual analysis.",
            "The objective is particularly to check that no obvious structure remains that the model has failed to capture."
        ], language);
    }
    if (sections[4]) {
        localize(".econ-section-title p", "DIAGNOSTICS", language, sections[4]);
        localize("h2", "What the errors can still tell us", language, sections[4]);
        localizeArray(sections[4]
            .querySelectorAll(".econ-columns > div p"), [
            "After estimation, the analysis does not stop at the model coefficients.",
            "Residuals can be used to check whether an important temporal structure is still present in the prediction errors.",
            "Graphical and statistical tools can then be used to study their behaviour and assess the quality of the specification."
        ], language);
    }
    if (sections[5]) {
        localize(".econ-section-title p", "WHERE DOES THE PROJECT STAND?", language, sections[5]);
        localize("h2", "An analysis still under development", language, sections[5]);
        localizeArray(sections[5]
            .querySelectorAll(".econ-columns > div p"), [
            "The project is still in progress and the empirical application is not yet sufficiently advanced to present final results.",
            "The modelling approach and the different model families are currently being explored before selecting a final specification."
        ], language);
        localize(".ts-status p", "<strong>Next step:</strong> complete the empirical application, compare the models on the same data and evaluate their forecasting performance on observations that were not used for estimation.", language, sections[5]);
    }
    localize(".econ-conclusion .page-label", "PROJECT IN PROGRESS", language, page);
    localize(".econ-conclusion h2", `
            Model a time series,
            <em>then check whether it actually forecasts well</em>
        `, language, page);
    localizeArray(page.querySelectorAll(".econ-conclusion > p:not(.page-label)"), [
        "This project allows me to explore the full time-series analysis process: identification, estimation, diagnostics and forecasting.",
        "The results will be added progressively once the empirical application and model comparison are sufficiently advanced."
    ], language);
}
function translateDataProducts(language) {
    const page = document.querySelector(".data-page");
    if (!page) {
        return;
    }
    localizeTitle("Data Products | Nora EL BYA", language);
    localize(".econ-hero .page-label", "DATA PRODUCTS · UNDER DEVELOPMENT", language, page);
    localize(".econ-hero h1", `
            From raw data,<br>
            <em>to a useful tool</em>
        `, language, page);
    localize(".econ-question", "How can an analysis be transformed into a clear, accessible and genuinely useful tool for understanding a situation or making a decision?", language, page);
    const meta = page.querySelectorAll(".econ-meta div");
    const metaLabels = [
        "OBJECTIVE",
        "APPROACH",
        "FORMAT",
        "STATUS"
    ];
    const metaValues = [
        "Decision support",
        "Analysis · Visualisation",
        "Dashboard · Interactive tool",
        "Under development"
    ];
    meta.forEach((item, index) => {
        localize("span", metaLabels[index], language, item);
        localize("strong", metaValues[index], language, item);
    });
    const sections = page.querySelectorAll(".econ-section");
    if (sections[0]) {
        localize(".econ-section-title p", "THE IDEA", language, sections[0]);
        localize("h2", "An analysis becomes truly useful when it can be understood", language, sections[0]);
        localizeArray(sections[0]
            .querySelectorAll(".econ-columns > div p"), [
            "Producing a model or calculating an indicator is only one part of the work.",
            "The results then need to be organised, visualised and presented clearly enough for someone else to use them.",
            "This is the step I am interested in here: turning data and analyses into <strong>simple decision-support tools</strong>."
        ], language);
    }
    if (sections[1]) {
        localize(".econ-section-title p", "WHAT I WANT TO BUILD", language, sections[1]);
        localize("h2", "Tools designed to answer a real question", language, sections[1]);
        localizeArray(sections[1]
            .querySelectorAll(".econ-columns > div p"), [
            "The objective is not to build a dashboard simply to display as many charts as possible.",
            "Each element should make it possible to answer a specific question quickly or identify an important piece of information."
        ], language);
        const principles = sections[1]
            .querySelectorAll(".data-principle");
        const principleTitles = [
            "Understand",
            "Compare",
            "Decide"
        ];
        const principleTexts = [
            "Highlight the main trends, changes and differences contained in the data.",
            "Make it easy to compare several periods, categories or indicators.",
            "Turn results into information that is clear enough to support a decision."
        ];
        principles.forEach((principle, index) => {
            localize("h3", principleTitles[index], language, principle);
            localize("p", principleTexts[index], language, principle);
        });
    }
    if (sections[2]) {
        localize(".econ-section-title p", "FROM RAW FILE TO PRODUCT", language, sections[2]);
        localize("h2", "Build the entire process, not just the visualisation", language, sections[2]);
        localizeArray(sections[2]
            .querySelectorAll(".econ-columns > div p"), [
            "A data product starts before the charts are created.",
            "I want to progressively develop projects covering the entire process: data preparation, analysis, indicator selection and final presentation."
        ], language);
        const workflow = sections[2]
            .querySelectorAll(".data-workflow-step");
        const workflowTitles = [
            "Collect",
            "Prepare",
            "Analyse",
            "Present"
        ];
        const workflowTexts = [
            "Identify the data that are genuinely necessary for the question being studied.",
            "Clean, structure and verify the quality of the data being used.",
            "Build the indicators and analyses needed to address the problem.",
            "Present the results in a simple, readable and interactive format."
        ];
        workflow.forEach((step, index) => {
            localize("strong", workflowTitles[index], language, step);
            localize("p", workflowTexts[index], language, step);
        });
    }
    if (sections[3]) {
        localize(".econ-section-title p", "ANALYSIS VS DATA PRODUCT", language, sections[3]);
        localize("h2", "Going beyond a one-off result", language, sections[3]);
        localizeArray(sections[3]
            .querySelectorAll(".econ-columns > div p"), [
            "A traditional analysis generally answers a question at a particular point in time.",
            "A data product can go further: the data can be updated, filtered or explored by another person without having to redo the entire analysis.",
            "The objective is therefore to create an interface between <strong>the data, the analysis and the person who needs to use them</strong>."
        ], language);
    }
    if (sections[4]) {
        localize(".econ-section-title p", "WHERE DOES THE PROJECT STAND?", language, sections[4]);
        localize("h2", "The first product still has to be built", language, sections[4]);
        localizeArray(sections[4]
            .querySelectorAll(".econ-columns > div p"), [
            "This part of my portfolio is still under development.",
            "I would like to gradually add projects where the analysis does not end with a notebook or report, but with a tool that can be used directly.",
            "Future projects will allow me to explore dashboards, interactive indicators and data visualisation in greater depth."
        ], language);
        localize(".data-status p", "<strong>Next step:</strong> select a concrete use case, build the first prototype and document the choices made here, from data preparation through to the final interface.", language, sections[4]);
    }
    localize(".econ-conclusion .page-label", "UNDER DEVELOPMENT", language, page);
    localize(".econ-conclusion h2", `
            Not only analyse,
            <em>make the analysis usable</em>
        `, language, page);
    localizeArray(page.querySelectorAll(".econ-conclusion > p:not(.page-label)"), [
        "This section is intended for projects combining data processing, analysis and visual presentation.",
        "It will evolve with my future projects and gradually include interactive tools built around concrete problems."
    ], language);
}
function translateResearch(language) {
    const page = document.querySelector(".research-page");
    if (!page) {
        return;
    }
    localizeTitle("Research & networks | Nora EL BYA", language);
    localize(".econ-hero .page-label", "RESEARCH & NETWORKS", language, page);
    localize(".econ-hero h1", `
            How do networks<br>
            <em>react to shocks?</em>
        `, language, page);
    localize(".econ-question", "I am interested in how economic networks evolve when they face a disruption: which relationships disappear, which ones are rebuilt, and how the structure of the network adapts.", language, page);
    const meta = page.querySelectorAll(".econ-meta div");
    const metaLabels = [
        "THEME",
        "QUESTION",
        "ANGLE",
        "APPROACH"
    ];
    const metaValues = [
        "Economic networks",
        "Post-shock dynamics",
        "Resilience & adaptation",
        "Empirical · quantitative"
    ];
    meta.forEach((item, index) => {
        localize("span", metaLabels[index], language, item);
        localize("strong", metaValues[index], language, item);
    });
    const sections = page.querySelectorAll(".econ-section");
    if (sections[0]) {
        localize(".econ-section-title p", "WHAT INTERESTS ME", language, sections[0]);
        localize("h2", "Observing what happens after a disruption", language, sections[0]);
        localizeArray(sections[0]
            .querySelectorAll(".econ-columns > div p"), [
            "Economic networks are not static. Firms, suppliers, infrastructures and institutions are connected through relationships that can evolve over time.",
            "When a shock occurs, some connections may disappear, new links may emerge, and some actors may become more or less important within the network.",
            "These transformations are what interest me: understanding not only the immediate effect of a shock, but also how <strong>the network reorganises afterwards</strong>."
        ], language);
    }
    if (sections[1]) {
        localize(".econ-section-title p", "QUESTIONS I EXPLORE", language, sections[1]);
        const questions = sections[1]
            .querySelectorAll(".research-question");
        const questionTitles = [
            "Which links disappear?",
            "How does the network rebuild itself?",
            "What makes a network resilient?"
        ];
        const questionTexts = [
            "Identify the most fragile relationships when a network faces a major disruption.",
            "Observe the emergence of new connections and the adaptation strategies implemented after the shock.",
            "Understand whether certain structures make it easier to absorb or recover from a disruption."
        ];
        questions.forEach((question, index) => {
            localize("h3", questionTitles[index], language, question);
            localize("p", questionTexts[index], language, question);
        });
    }
    if (sections[2]) {
        localize(".econ-section-title p", "APPLICATION AREAS", language, sections[2]);
        localize(".econ-columns h2", "One question, several possible applications", language, sections[2]);
        localizeArray(sections[2]
            .querySelectorAll(".econ-columns > div p"), [
            "I have not yet limited this research direction to a single application.",
            "Several fields can be used to study how a network evolves after a shock, with different mechanisms and different types of data."
        ], language);
        const applications = sections[2]
            .querySelectorAll(".research-application");
        const applicationTitles = [
            "Sports economics",
            "Finance & risk",
            "Energy"
        ];
        const applicationTexts = [
            "Study how networks between players, clubs or supporters evolve after a major event, and what these changes could mean for performance or engagement.",
            "Explore how stress spreads between financial actors and how their interdependencies evolve during crises.",
            "Understand how shocks to prices, supply or infrastructure spread through economic networks."
        ];
        applications.forEach((application, index) => {
            localize("h3", applicationTitles[index], language, application);
            localize("p", applicationTexts[index], language, application);
        });
    }
    if (sections[3]) {
        localize(".econ-section-title p", "HOW TO STUDY IT?", language, sections[3]);
        localize(".econ-columns h2", "Compare the network before, during and after", language, sections[3]);
        localizeArray(sections[3]
            .querySelectorAll(".econ-columns > div p"), [
            "One approach I am interested in consists of reconstructing a network at several points in time and then comparing its structure.",
            "This would make it possible to track changes in connections, actor centrality and the concentration of the network around particular nodes.",
            "The next objective would be to relate these transformations to the shock being studied and to the network’s ability to adapt."
        ], language);
        const flow = sections[3]
            .querySelectorAll(".research-flow-step");
        const flowTitles = [
            "Before",
            "Shock",
            "Reorganisation",
            "Resilience"
        ];
        const flowTexts = [
            "Observe the initial structure and identify important actors or links.",
            "Identify the disruption and the parts of the network directly exposed to it.",
            "Measure links that were lost, created or redirected after the shock.",
            "Study the network’s ability to recover a stable structure or functioning."
        ];
        flow.forEach((step, index) => {
            localize("strong", flowTitles[index], language, step);
            localize("p", flowTexts[index], language, step);
        });
    }
    if (sections[4]) {
        localize(".econ-section-title p", "AN EVOLVING QUESTION", language, sections[4]);
        localize("h2", "A research direction that remains open", language, sections[4]);
        localizeArray(sections[4]
            .querySelectorAll(".econ-columns > div p"), [
            "I am progressively developing this reflection around network dynamics and their capacity to adapt.",
            "The empirical application and the data to be used have not yet been definitively selected.",
            "I want to keep an open approach, compare different applications and identify those that are best suited to studying these mechanisms."
        ], language);
    }
    const researchContact = page.querySelector(".research-contact");
    if (researchContact) {
        localize(".research-contact-label", "DISCUSSION", language, researchContact);
        localize("h2", `
                An idea about
                <em>economic networks?</em>
            `, language, researchContact);
        localize(".research-contact-text > p:not(.research-contact-label)", "I am always interested in discussing these questions, whether it is about an application, an empirical approach, a reference to read or simply another way of looking at network dynamics.", language, researchContact);
        const link = researchContact.querySelector("a");
        localizeElement(link, "Discuss research →", language);
        localizeAttribute(link, "href", "mailto:noraelbya@icloud.com?subject=Discussion%20about%20economic%20networks", language, "mailto:noraelbya@icloud.com?subject=Discussion%20autour%20des%20réseaux%20économiques");
    }
}
function translateCV(language) {
    const page = document.querySelector(".cv-page");
    if (!page) {
        return;
    }
    localizeTitle("CV | Nora EL BYA", language);
    localize(".cv-intro-section .page-label", "CURRICULUM VITAE", language, page);
    localize(".cv-intro-section h1", `
            Econometrics, data<br>
            <em>& modelling</em>
        `, language, page);
    localize(".cv-intro-text", "Master 2 student in Econometrics & Statistics, developing a quantitative profile centred on data analysis, modelling, machine learning and time series.", language, page);
    const cvButtons = page.querySelectorAll(".cv-actions .cv-button");
    if (cvButtons[0]) {
        localizeElement(cvButtons[0], `
                View CV
                <span>↗</span>
            `, language);
    }
    if (cvButtons[1]) {
        localizeElement(cvButtons[1], `
                Download CV
                <span>↓</span>
            `, language);
    }
    const mainSections = page.querySelectorAll(".cv-main > section");
    if (mainSections[0]) {
        localize(".cv-section-title p", "EDUCATION", language, mainSections[0]);
        localize(".cv-section-title h2", "Academic background", language, mainSections[0]);
        const timeline = mainSections[0]
            .querySelectorAll(".cv-timeline-item");
        if (timeline[0]) {
            localize(".cv-timeline-content h3", "Master 2 in Econometrics & Statistics", language, timeline[0]);
            const paragraphs = timeline[0]
                .querySelectorAll(".cv-timeline-content p:not(.cv-place)");
            localizeArray(paragraphs, [
                "Research track with courses in machine learning, time series, non-parametric methods and stochastic processes."
            ], language);
        }
        if (timeline[1]) {
            localize(".cv-timeline-content h3", "Master 1 in Econometrics & Statistics", language, timeline[1]);
            const paragraphs = timeline[1]
                .querySelectorAll(".cv-timeline-content p:not(.cv-place)");
            localizeArray(paragraphs, [
                "Training in econometrics, statistics, programming and quantitative analysis.",
                "<strong>🇬🇧 University of Kent</strong><br>Six-month university exchange in the United Kingdom, including Financial Technology and International Finance.",
                "<strong>🇪🇸 Universidad Autónoma de Madrid</strong><br>Research week focused on network analysis applied to economics: connectivity, centrality, diffusion and shock propagation in networks."
            ], language);
        }
        if (timeline[2]) {
            localize(".cv-timeline-content h3", "Bachelor's Degree in Economics — With honours", language, timeline[2]);
            const paragraphs = timeline[2]
                .querySelectorAll(".cv-timeline-content p:not(.cv-place)");
            localizeArray(paragraphs, [
                "Economics, statistics, mathematics, macroeconomics and microeconomics.",
                "<strong>🇹🇷 Galatasaray University — Istanbul</strong><br>University exchange with courses in statistics, econometrics, programming and development economics."
            ], language);
        }
        if (timeline[3]) {
            localize(".cv-timeline-content h3", "ECG Preparatory Classes", language, timeline[3]);
            const paragraphs = timeline[3]
                .querySelectorAll(".cv-timeline-content p:not(.cv-place)");
            localizeArray(paragraphs, [
                "Applied mathematics, economics, computer science and languages."
            ], language);
        }
    }
    if (mainSections[1]) {
        localize(".cv-section-title p", "PROJECTS", language, mainSections[1]);
        localize(".cv-section-title h2", "Selected analyses", language, mainSections[1]);
        const projects = mainSections[1]
            .querySelectorAll(".cv-project");
        const projectTypes = [
            "ECONOMETRICS",
            "ECONOMETRICS · R",
            "MACHINE LEARNING · PYTHON",
            "RESEARCH"
        ];
        const projectTitles = [
            "Energy & inflation in Europe",
            "Internet Access & Life Satisfaction",
            "Conformal Prediction",
            "Networks & shock propagation"
        ];
        const projectTexts = [
            "Analysis of the relationship between energy inflation and inflation excluding energy across the European Union.",
            "Econometric analysis of European data involving cleaning, merging, OLS and fixed effects.",
            "Comparison of linear regression and Random Forest using several Conformal Prediction methods.",
            "Exploration of the dynamics of economic networks and their reorganisation following a disruption."
        ];
        projects.forEach((project, index) => {
            localize("span", projectTypes[index], language, project);
            localize("h3", projectTitles[index], language, project);
            localize("p", projectTexts[index], language, project);
        });
    }
    const sideCards = page.querySelectorAll(".cv-side-card");
    if (sideCards[0]) {
        localize(".cv-side-label", "CONTACT", language, sideCards[0]);
        localize("h3", "Contact me", language, sideCards[0]);
    }
    if (sideCards[1]) {
        localize(".cv-side-label", "LANGUAGES", language, sideCards[1]);
        localize("h3", "Languages", language, sideCards[1]);
        const languages = sideCards[1]
            .querySelectorAll(".cv-language");
        const languageNames = [
            `
                <span class="cv-flag">🇫🇷</span>
                French
            `,
            `
                <span class="cv-flag">🇬🇧</span>
                English
            `,
            `
                <span class="cv-flag">🇩🇪</span>
                German
            `,
            `
                <span class="cv-flag">🇪🇸</span>
                Spanish
            `
        ];
        const levels = [
            "Native",
            "C1",
            "B2",
            "B1"
        ];
        languages.forEach((item, index) => {
            localize(".cv-language-name", languageNames[index], language, item);
            localize(".cv-language-level", levels[index], language, item);
        });
    }
    if (sideCards[2]) {
        localize(".cv-side-label", "TOOLS", language, sideCards[2]);
        localize("h3", "Tools & programming", language, sideCards[2]);
    }
    if (sideCards[3]) {
        localize(".cv-side-label", "SKILLS", language, sideCards[3]);
        localize("h3", "Quantitative analysis", language, sideCards[3]);
        const skills = sideCards[3]
            .querySelectorAll(".cv-skills span");
        localizeArray(skills, [
            "Econometrics",
            "Statistics",
            "Machine Learning",
            "Time Series",
            "Panel Data",
            "Fixed Effects",
            "Network Analysis",
            "Data Visualisation"
        ], language);
    }
}
function translateContact(language) {
    const page = document.querySelector(".contact-page");
    if (!page) {
        return;
    }
    localizeTitle("Contact | Nora EL BYA", language);
    localize(".contact-intro .page-label", "CONTACT", language, page);
    localize(".contact-intro h1", `
            An idea,<br>
            <em>a project, a conversation?</em>
        `, language, page);
    localize(".contact-intro-text", "For a professional opportunity, a discussion about data, econometrics or research, you can contact me directly by email.", language, page);
    const mainCard = page.querySelector(".contact-main-card");
    if (mainCard) {
        localize(".contact-label", "DIRECT CONTACT", language, mainCard);
        localize("h2", `
                The easiest way:<br>
                <em>email me directly.</em>
            `, language, mainCard);
        localize(".contact-main-card > p", "I am happy to discuss opportunities, questions and ideas related to my projects, data, quantitative analysis or economic networks.", language, page);
        localize(".contact-email small", "EMAIL", language, mainCard);
        const actions = mainCard.querySelectorAll(".contact-actions > *");
        if (actions[0]) {
            localizeElement(actions[0], `
                    Send an email
                    <span>→</span>
                `, language);
        }
        if (actions[1]) {
            localizeElement(actions[1], "Copy address", language);
        }
    }
    const options = page.querySelectorAll(".contact-option");
    if (options[0]) {
        localize(".contact-option-label", "OPPORTUNITY", language, options[0]);
        localize("h3", "Professional discussion", language, options[0]);
        localize("p:not(.contact-option-label)", "Internship, work-study position, assignment, data project or opportunity in quantitative analysis.", language, options[0]);
        localizeAttribute(options[0], "href", "mailto:noraelbya@icloud.com?subject=Professional%20opportunity", language);
    }
    if (options[1]) {
        localize(".contact-option-label", "RESEARCH", language, options[1]);
        localize("h3", "Research discussion", language, options[1]);
        localize("p:not(.contact-option-label)", "Economic networks, shock propagation, data or simply an idea to share.", language, options[1]);
        localizeAttribute(options[1], "href", "mailto:noraelbya@icloud.com?subject=Discussion%20about%20economic%20networks", language);
    }
    const bottomTexts = page.querySelectorAll(".contact-bottom p");
    if (bottomTexts[0]) {
        localizeElement(bottomTexts[0], "Nora EL BYA · Econometrics · Data · Modelling", language);
    }
    if (bottomTexts[1]) {
        localizeElement(bottomTexts[1], "France", language);
    }
}
function updateLanguageButtons(language) {
    document
        .querySelectorAll(".language")
        .forEach(button => {
        button.classList.remove("active");
    });
    const activeButton = document.getElementById(language === "fr"
        ? "fr-button"
        : "en-button");
    if (activeButton) {
        activeButton.classList.add("active");
    }
}
function changeLanguage(language) {
    if (language !== "fr" &&
        language !== "en") {
        return;
    }
    document.documentElement.lang =
        language;
    localStorage.setItem("portfolio-language", language);
    translateNavigation(language);
    translateHome(language);
    translateAbout(language);
    translateProjects(language);
    translateEconometricsHub(language);
    translateEnergy(language);
    translateInternet(language);
    translateMachineLearning(language);
    translateTimeSeries(language);
    translateDataProducts(language);
    translateResearch(language);
    translateCV(language);
    translateContact(language);
    updateLanguageButtons(language);
}
const frButton = document.getElementById("fr-button");
const enButton = document.getElementById("en-button");
if (frButton) {
    frButton.addEventListener("click", () => {
        changeLanguage("fr");
    });
}
if (enButton) {
    enButton.addEventListener("click", () => {
        changeLanguage("en");
    });
}
const contactCopyButton = document.getElementById("copy-email");
if (contactCopyButton) {
    const copyButtonObserver = new MutationObserver(() => {
        const language = localStorage.getItem("portfolio-language") || "fr";
        const text = contactCopyButton
            .textContent
            .trim();
        if (language === "en" &&
            text ===
                "Adresse copiée ✓") {
            contactCopyButton
                .textContent =
                "Address copied ✓";
        }
        if (language === "en" &&
            text ===
                "Copier l’adresse") {
            contactCopyButton
                .textContent =
                "Copy address";
        }
    });
    copyButtonObserver.observe(contactCopyButton, {
        childList: true,
        subtree: true,
        characterData: true
    });
}
const savedLanguage = localStorage.getItem("portfolio-language") || "fr";
changeLanguage(savedLanguage);
