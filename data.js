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
            projectName: "Programming Diaries",
            image: "images/programmingdiaries.png",
            summary:
                "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
            preview: "https://programmingdiaries.herokuapp.com/",
            techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
        },
        {
            projectName: "Find Your Bank",
            image: "images/findyourbank.png",
            summary:
                "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
            preview: "https://clever-fermi-0d5d76.netlify.app",
            techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
        },
        {
            projectName: "Web Portfolio",
            image: "images/portfolio.png",
            summary:
                "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
            preview: "https://github.com/vinaysomawat/Travographer-Portal",
            techStack: ["HTML", "Bootstrap", "JavaScript"],
        },
        {
            projectName: "Resume Builder",
            image: "images/resume-builder.png",
            summary:
                "Browser based editor to build and download Resumes in a customizable templates.",
            preview: "https://vinaysomawat.github.io/Resume-Builder",
            techStack: ["HTML", "Bootstrap", "JavaScript"],
        },
    ],
    softwareProjects: [
        {
            projectName: "Pizza Ordering ChatBot",
            image: "images/pizzaorderchatbot.png",
            summary:
                "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
            preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
            techStack: ["Dailogflow", "Firebase"],
        },
        {
            projectName: "WhatsApp-Bot",
            image: "images/whatsappbot.jpg",
            summary:
                "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
            preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
            techStack: ["Selenium", "Chrome Webdriver", "Python"],
        },
        {
            projectName: "Bill Generator",
            image: "images/billgenerator.png",
            summary:
                "GUI to transfer data to excel sheets and generate bills on the local shops.",
            preview: "https://github.com/vinaysomawat/Bill-Generator",
            techStack: ["Tkinter", "Openxlpy", "Python"],
        },
    ],
    androidProjects: [
        {
            projectName: "NITW-CSE",
            image: "images/nitwcse.jpg",
            summary:
                "The Application display details of Department courses, reference books, research, publication and faculty profile.",
            preview: "https://github.com/vinaysomawat/NITW-CSE",
            techStack: ["JAVA", "XML", "Android"],
        },
        {
            projectName: "CareerHigh-App",
            image: "images/carrerhigh.png",
            summary:
                "The Application display the webpages of website careerhigh.in in android devices.",
            preview: "https://github.com/vinaysomawat/CareerHigh-Android",
            techStack: ["JAVA", "XML", "Android"],
        },
    ],
    freelanceProjects: [
        {
            projectName: "SnylloAir.com",
            image: "images/snylloair.png",
            summary:
                "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
            preview: "https://www.snylloair.com/",
            techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
        },
        {
            projectName: "Delivery+",
            image: "images/AM-Logo-.png",
            summary: "Android Application to display website in android devices.",
            preview:
                "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
            techStack: ["Android", "JAVA", "Play Store"],
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
        title: "B.Tech. in Computer Science and Engineering",
        duration: "2016 - 2020",
        subtitle: "National Institute of Technology, Warangal",
        details: [],
        tags: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Database Management System",
            "Computer Networks",
            "Compiler Designing",
            "Cloud Computing",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Class 12th in Science and Mathematics",
        duration: "",
        subtitle: "Board of Secondary Education, Rajasthan",
        details: [],
        tags: ["Physics", "Chemistry", "Mathematics"],
        icon: "book",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Stackoverflow",
                link: "https://stackoverflow.com/users/8461233/vinay-somawat",
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
                link: "https://www.buymeacoffee.com/r194dME8y",
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