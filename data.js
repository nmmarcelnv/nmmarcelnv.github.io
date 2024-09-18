export const bio = [
    "Hello there, This is Marcel V. Nguemaha.",
    `Experienced Health Data scientist .`,
    `Eager to apply my technical expertise and in-depth
    health understanding to drive impactful contributions and exceed expectations in challenging projects.`,
    "Thanks for taking the time to learn a little about me!",
];

export const skills = [
    {
        title: "Languages",
        skillName: "Python, SQL, R",
        color: "1",
        percentage: "80",
    },
    {
        title: "Data and Analytics",
        skillName: "SK-Learn, Power BI, Pandas",
        color: "5",
        percentage: "50",
    },
    {
        title: "Web Development",
        skillName: "Django, Plotly",
        color: "6",
        percentage: "70",
    },
    {
        title: "Design",
        skillName: "HTML, Bootstrap",
        color: "4",
        percentage: "70",
    },
    {
        title: "Version Control",
        skillName: "GitHub, Bitbucket",
        color: "7",
        percentage: "70",
    },
    {
        title: "Tools",
        skillName: "Postman, Chrome DevTools",
        color: "3",
        percentage: "80",
    },
    {
        title: "IDE",
        skillName: "VS Code",
        color: "6",
        percentage: "70",
    },
];

export const projects = {
    webProjects: [
        {
            projectName: "USA 2023 National Birth Statistics",
            image: "images/CDCbirths2023.png",
            summary:
                "Created a Power BI Dashboard to analyze birth outcomes such as low birth weight, low 5 minute APGAR score using data from https://www.cdc.gov/nchs/data_access/vitalstatsonline.htm ",
            preview: "https://app.powerbi.com/view?r=eyJrIjoiNWFjZjYzZTUtMjAzYS00ZTM5LTk3NzEtM2NmNTk4MGFlYzFiIiwidCI6ImNmNzI0ZGRkLTI2MDQtNDBlZi04ZWM3LTIxZjIxNjYwZTZiYiIsImMiOjF9",
            techStack: ["Power BI", "Python", "Bash"],
        },
        {
            projectName: "Chronic Kidney Disease and SDOH",
            image: "images/CKDLogo.png",
            summary:
                "Overlay data on Chronic Kidney Disease prevalence with Supplementary Nutrition Assistance Program (SNAP).",
            preview: "https://app.powerbi.com/view?r=eyJrIjoiNmU4MmM1NzctNzQ2OS00MDRlLTg1ZDQtYjZmZGYwNTdkMzlmIiwidCI6ImNmNzI0ZGRkLTI2MDQtNDBlZi04ZWM3LTIxZjIxNjYwZTZiYiIsImMiOjF9",
            techStack: ["Power BI", "Python", "Bash"],
        },
        {
            projectName: "Web Portfolio",
            image: "images/portfolio.png",
            summary:
                "Github.",
            preview: "https://github.com/nmmarcelnv/",
            techStack: ["Bootstrap", "JavaScript"],
        },
    ],
    softwareProjects: [
        {
            projectName: "Pizza Ordering ChatBot",
            image: "images/pizzaorderchatbot.png",
            summary:
                "coming soon.",
            preview: "https://github.com/nmmarcelnv/",
            techStack: ["Python", "SQL"],
        },
    ],
    androidProjects: [
        {
            projectName: "NITW-CSE",
            image: "images/nitwcse.jpg",
            summary:
                "Coming soon",
            preview: "https://github.com/nmmarcelnv",
            techStack: ["SQL", "Dash", "Python"],
        },
    ],
    freelanceProjects: [
        {
            projectName: "SnylloAir.com",
            image: "images/snylloair.png",
            summary:
                "Coming soon...",
            preview: "https://github.com/nmmarcelnv",
            techStack: ["Python", "Django", "Power BI"],
        },
    ],
};

export const experience = [
    {
        title: "Associate Director",
        duration: "Jan 2024 - Present",
        subtitle: "Data Scientist",
        details: [
            "Analytics Center of Excellence, Merck"
        ],
        tags: ["Python", "SQL", "Power BI", "Power Apps", "SKlearn"],
        icon: "truck ",
    },
    {
        title: "National Goverment Services, Elevance Health",
        duration: "Aug 2022 - Oct 2023",
        subtitle: "Principal Data Scientist",
        details: [
            `Led an Analytics Data jam in collaboration with the Health Equity Director, leading to a website that was published 
            and used by more than 20 internal and external stakeholders`,
            `Spearheaded a research program on intersectionality and Health Equity which is being considered 
            for $1 million funding proposal from the Center of Medicare and Medicaid Services (CMS)`,
            `Established a data analytics Lunch & Learn program that currently fosters interdisciplinary collaboration 
            between more than 15 associates from diverse academic backgrounds.`,
        ],
        tags: ["Python", "SQL", "Pandas", "Jupyter Notebook", "Machine Learning", "Teaching", "Plotly",],
        icon: "heartbeat",
    },
    {
        title: "Cigna Health",
        duration: "Sep 2021 - Aug 2022",
        subtitle: "Senior Data Scientist",
        details: [
            `Applied NLP and procedure code embeddings to predict future diagnosis codes, thereby anticipating future
            hospital visits and reducing healthcare provider backlog by 10%.`,
            `Led 8 data scientists in adopting GitHub and version control best practices, resulting in faster code deployment.`,
            `Created a Power BI visualization enabling senior leadership to monitor more than 200 KPIs across 6 departments.`,
        ],
        tags: ["Python", "SQL", "Pandas", "Jupyter Notebook", "Machine Learning", "Teaching", "Plotly",],
        icon: "qrcode",
    },
    {
        title: "CVS Health",
        duration: "May 2019 - Sep 2021",
        subtitle: "Analytic Advisor",
        details: [
            `Developed a Pharmacy Benefit Management (PBM) algorithm to manage more than 400 client contracts 
            with an estimated total Average Wholesale Price (AWP) of 20 million US Dollar.`,
            `Led the migration of Big Data workflows to Google Cloud, resulting in a 40% process performance improvement.`,
        ],
        tags: ["Python", "SQL", "Pandas", "Jupyter Notebook", "Machine Learning", "Optimization", "Plotly",],
        icon: "group",
    },
];

export const education = [
    {
        title: "MPH, Mother and Child Health",
        duration: "05-2024 - present",
        subtitle: "Johns Hopkins School of Public Health",
        details: [],
        tags: ["Nutrition Insecurity", "Health Equity", "Quality Improvement"],
        icon: "book",
    },
    {
        title: "PhD Physics",
        duration: "2013 - 2018",
        subtitle: "Florida State University, USA",
        details: [],
        tags: [
            "Protein Modeling",
            "Data Analysis",
            "High Performance Computing",
            "Monte Carlo Simulations",
            "Algorithm Development",
            "Computer Programming",
        ],
        icon: "graduation-cap",
    },    
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Stackoverflow",
                link: "https://stackoverflow.com/users/5207263/valery-marcel",
            },
            {
                text: "GitHub",
                link: "https://github.com/nmmarcelnv",
            },
            {
                text: "LeetCode",
                link: "https://leetcode.com/nmmarcelnv/",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            },
            {
                text: "Clone this page",
                link: "https://github.com/nmmarcelnv/nmmarcelnv.github.io",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/valery-marcel/",
            },
            {
                text: "Twitter",
                link: "https://twitter.com/nmmarcelnv",
            },
            {
                text: "Buy me a coffee",
                link: "https://www.buymeacoffee.com/nmmarcelnv", 
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Marcel V. Nguemaha",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];