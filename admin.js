/* ==========================================================================
   PORTFOLIO ADMIN & ENTITY MANAGER JAVASCRIPT
   Authentication, Real-time Entity Editing, Data Persistence, and UI Controls
   ========================================================================== */

(function() {
    'use strict';

    // --------------------------------------------------------------------------
    // 1. Default Portfolio Entities Data Store
    // --------------------------------------------------------------------------
    const DEFAULT_PORTFOLIO_DATA = {
        hero: {
            intro: "Hello, I'm",
            name: "Arul Raj W",
            titles: [
                "AI Developer",
                "Full Stack Developer",
                "Computer Vision Enthusiast",
                "Python Developer",
                "Problem Solver"
            ],
            badge: "Available for Internships & Projects",
            tagline: "Building intelligent solutions that solve real-world problems through AI, Computer Vision, and Full-Stack Development.",
            profileImage: "./static/profile-photo.jpeg",
            resumeLink: "static/25AD013_arul_raj_w.pdf",
            contactBtnText: "Contact Me",
            projectsBtnText: "View Projects",
            resumeBtnText: "Resume",
            github: "https://github.com/arulrajw2025aids-ui",
            linkedin: "https://www.linkedin.com/in/arul-raj-w-a5101b388",
            defaultTheme: "cyber-cyan"
        },
        about: {
            title: "About Me",
            whoIAmTitle: "Who I Am",
            paragraphs: [
                "I am an Artificial Intelligence & Data Science undergraduate at Sri Eshwar College of Engineering with a strong passion for Artificial Intelligence, Computer Vision, Machine Learning, and Full-Stack Web Development.",
                "I enjoy building intelligent software that solves real-world challenges. My interests include AI-powered applications, UAV technologies, automation, web development, and problem solving.",
                "I actively participate in hackathons, coding competitions, and continuously improve my technical skills through projects and online learning."
            ],
            details: {
                location: "Coimbatore, Tamil Nadu, India",
                institution: "Sri Eshwar College of Engineering",
                degree: "B.Tech – AI & Data Science",
                academics: "8.82 CGPA"
            },
            focusCards: [
                {
                    icon: "fa-solid fa-network-wired",
                    title: "AI & UAV Systems",
                    desc: "Integrating computer vision pipelines with drone hardware for smart automation."
                },
                {
                    icon: "fa-solid fa-code",
                    title: "Full-Stack Apps",
                    desc: "Crafting robust backends with Flask/SQLite and premium interfaces in HTML/CSS/JS."
                },
                {
                    icon: "fa-solid fa-brain",
                    title: "Competitive Coding",
                    desc: "Over 1,200 problems solved across platforms, cultivating quick problem-solving."
                }
            ]
        },
        education: [
            {
                id: "edu-1",
                date: "2025 – 2029",
                degree: "B.Tech - Artificial Intelligence & Data Science",
                institution: "Sri Eshwar College of Engineering",
                badge: "CGPA: 8.82",
                badgeIcon: "fa-solid fa-chart-line",
                desc: "Specializing in machine learning methodologies, computer vision architectures, advanced data structures, algorithms, and cognitive computing applications."
            },
            {
                id: "edu-2",
                date: "2024 – 2025",
                degree: "Higher Secondary (HSC)",
                institution: "Carmel Higher Secondary School",
                badge: "Percentage: 90.6%",
                badgeIcon: "fa-solid fa-square-poll-vertical",
                desc: "Completed high school studies focusing heavily on Mathematics, Physics, and Computer Science foundations."
            },
            {
                id: "edu-3",
                date: "2022 – 2023",
                degree: "Secondary School Leaving Certificate (SSLC)",
                institution: "Carmel Higher Secondary School",
                badge: "Percentage: 91.6%",
                badgeIcon: "fa-solid fa-star",
                desc: "Established primary academic background with distinction in general sciences and mathematics."
            }
        ],
        skills: [
            {
                id: "cat-languages",
                icon: "fa-solid fa-code",
                title: "Languages & Core",
                skills: ["Python", "C / C++", "JavaScript", "Data Structures & Algorithms"]
            },
            {
                id: "cat-ai-ml",
                icon: "fa-solid fa-brain",
                title: "AI & Machine Learning",
                skills: ["YOLO (Object Detection)", "Computer Vision", "Machine Learning", "Image Processing (OpenCV)"]
            },
            {
                id: "cat-web",
                icon: "fa-solid fa-globe",
                title: "Web Development",
                skills: ["Flask (Backend)", "HTML5 & CSS3", "SQLite (Database)", "Responsive Web Design"]
            },
            {
                id: "cat-tools",
                icon: "fa-solid fa-screwdriver-wrench",
                title: "Developer Tools",
                skills: ["Git", "GitHub", "VS Code", "Google Colab", "Canva", "MS Word", "Excel", "Code::Blocks"]
            }
        ],
        projects: [
            {
                id: "proj-oceanix",
                title: "Oceanix",
                category: "ai-ml",
                categoryBadge: "Featured - Marine Intelligence",
                isFeatured: true,
                image: "./assets/images/oceanix.jpg",
                desc: "Oceanix is a next-generation Smart Marine Intelligence Platform that uses AI, machine learning, and geospatial technologies to analyze marine data. It provides fish availability prediction, fish migration analysis, species identification, vessel tracking, maritime boundary alerts, pollution monitoring, ocean mapping, and fish market forecasting, supporting sustainable fisheries and marine conservation.",
                tech: ["AI", "Machine Learning", "Geospatial", "Python"],
                features: [],
                github: "",
                caseStudy: ""
            },
            {
                id: "proj-uav",
                title: "UAV Disaster Management System",
                category: "ai-ml",
                categoryBadge: "AI / Computer Vision",
                isFeatured: false,
                image: "./assets/images/uav_disaster.png",
                desc: "Developed an AI-powered UAV disaster management system capable of detecting humans from aerial images using Ultralytics YOLO. It functions in real-time to facilitate faster response times during flooding, earthquakes, and forest search missions.",
                features: [
                    "Real-time Human Detection in chaotic aerial frames",
                    "Robust Object & Victim Spotting pipelines",
                    "Integrated disaster rescue coordination map outputs",
                    "Rapid frame rate drone image pre-processing"
                ],
                tech: ["Python", "YOLOv8", "Flask", "SQLite", "HTML/CSS/JS"],
                github: "https://github.com/Team-OrionForge/UAV-Disaster-Management",
                caseStudy: "uav"
            },
            {
                id: "proj-hostel",
                title: "Fix My Hostel",
                category: "web-dev",
                categoryBadge: "Web Application",
                isFeatured: false,
                image: "./assets/images/fix_my_hostel.png",
                desc: "A clean, responsive Hostel Complaint Management System. Enables residents to submit issues and track resolution timelines, with integrated admin consoles for work allocation.",
                features: [],
                tech: ["Flask", "SQLite", "CSS3", "JS ES6"],
                github: "https://github.com/arulrajw2025/fix-my-hostel",
                caseStudy: ""
            },
            {
                id: "proj-course",
                title: "Course Bloom",
                category: "web-dev",
                categoryBadge: "Front-End UI",
                isFeatured: false,
                image: "./assets/images/course_bloom.png",
                desc: "An intuitive portal designed to index and search learning resources. Built to simplify discovering programming courses using client-side dynamic search indices.",
                features: [],
                tech: ["HTML5", "CSS Grid", "JS vanilla"],
                github: "https://github.com/arulrajw2025aids-ui/online_course_website",
                caseStudy: ""
            }
        ],
        achievements: [
            {
                id: "ach-1",
                icon: "fa-solid fa-trophy",
                date: "June 2026",
                title: "Top 100 Participant",
                organization: "Confluence 2.0 International Hackathon",
                desc: "Ranked in the top 100 international teams for building innovative automated engineering products, evaluated on execution speed, feasibility, and technical complexity."
            },
            {
                id: "ach-2",
                icon: "fa-solid fa-award",
                date: "SECE Competition",
                title: "🥈 2nd Place – Decode the Dash",
                organization: "Technical Problem Solving Contest",
                desc: "Won 2nd prize at Sri Eshwar College of Engineering for rapid code debugging, advanced algorithm optimization, and logical aptitude challenges."
            },
            {
                id: "ach-3",
                icon: "fa-solid fa-medal",
                date: "SECE Hackathon",
                title: "🥈 2nd Place – Createathon 2025",
                organization: "UI/UX Development Sprint",
                desc: "Developed a complete production-ready responsive layout from wireframes under strict time restrictions, placing second among highly competitive teams."
            },
            {
                id: "ach-4",
                icon: "fa-solid fa-lightbulb",
                date: "2026",
                title: "First round shortlisted",
                organization: "ET AI HACKATHON 2.0",
                desc: "ET AI Hackathon 2.0 is a major nation-scale innovation challenge hosted by The Economic Times in partnership with Unstop. It invites students and developers to build real-world Artificial Intelligence and Generative AI solutions across business, social impact, and open innovation tracks, featuring a ₹10,00,000 prize pool."
            },
            {
                id: "ach-5",
                icon: "fa-solid fa-globe",
                date: "2026",
                title: "Far away Round 1 Selected",
                organization: "Far away",
                desc: "The FAR AWAY Hackathon 2026 is an elite, multi-disciplinary international youth hackathon designed for young creators, developers, and visionaries aged 15 to 25. Organised by Zuup in collaboration with partner institutions like Parul University, the competition challenges participants to build functional prototypes that solve critical global friction points."
            },
            {
                id: "ach-6",
                icon: "fa-solid fa-robot",
                date: "2026",
                title: "Orion Forge — 🏆 Excellence in Innovation",
                organization: "Varchasva",
                desc: "Recognized for our innovative approach to AI-powered disaster response and UAV-based survivor detection. Varchasva 2026 is a flagship city-wide ideathon and innovation challenge organised by bits&bytes Noida, bringing together innovators to build tech-driven solutions for real-world issues."
            }
        ],
        profiles: {
            leetcode: {
                solved: "30+ Problems Solved",
                badge: "DSA Focus",
                url: "https://leetcode.com/u/arulrajw2025/"
            },
            skillrack: {
                solved: "900+ Problems Solved",
                extra: "200+ Bronze Badges",
                badge: "Daily Challenge",
                url: "http://www.skillrack.com/profile/557371/30313acc45cdbf6deee4f3d2ea34a06baff11c02"
            },
            codechef: {
                solved: "300+ Problems Solved",
                badge: "Competitive Algorithmic",
                url: "https://www.codechef.com/users/arulrajw2025"
            },
            github: {
                solved: "Active Committer",
                extra: "Public Repositories",
                badge: "Open Source",
                url: "https://github.com/arulrajw2025aids-ui"
            }
        },
        services: [
            {
                id: "srv-1",
                icon: "fa-solid fa-robot",
                title: "AI Development",
                desc: "Building specialized regression, classification, and neural pipelines that map operational data to actionable business insights."
            },
            {
                id: "srv-2",
                icon: "fa-solid fa-eye",
                title: "Computer Vision",
                desc: "Specialized object recognition, segmentation models, and live video analysis workflows using frameworks like YOLO, PyTorch, and OpenCV."
            },
            {
                id: "srv-3",
                icon: "fa-brands fa-python",
                title: "Python Development",
                desc: "Efficient backends, algorithmic scripts, pipeline automation wrappers, and computational engines built around native Python paradigms."
            },
            {
                id: "srv-4",
                icon: "fa-solid fa-laptop-code",
                title: "Web Development",
                desc: "Designing modern, glassmorphic full-stack layouts with Flask databases and responsive, fast, standards-compliant user interfaces."
            },
            {
                id: "srv-5",
                icon: "fa-solid fa-gears",
                title: "Automation",
                desc: "Developing scripts to streamline tedious routines, fetch external data nodes, scrape information, and sync system endpoints."
            },
            {
                id: "srv-6",
                icon: "fa-solid fa-network-wired",
                title: "Machine Learning",
                desc: "Designing and deploying predictive algorithms and data architectures that scale to handle high-frequency database entries."
            }
        ],
        competencies: [
            "Hackathons", "Team Collaboration", "AI Projects", "Web Development Projects", "Problem Solving", "Self Learning", "Leadership", "Project Development"
        ],
        contact: {
            desc: "Feel free to reach out for hackathon collaborations, internship opportunities, code development, or project consultations. I reply promptly.",
            email: "arulraj.w2025aids@sece.ac.in",
            phone: "+91 63847 42246",
            location: "Coimbatore, Tamil Nadu, India",
            github: "https://github.com/arulrajw2025aids-ui",
            linkedin: "https://www.linkedin.com/in/arul-raj-w-a5101b388",
            defaultTheme: "cyber-cyan"
        },
        footer: {
            tagline: "Developing intelligent applications with clean code paradigms.",
            copyright: "© 2026 All Rights Reserved.",
            designerName: "Arul Raj W",
            designerLink: "https://github.com/arulrajw2025aids-ui"
        }
    };

    // --------------------------------------------------------------------------
    // 2. State & Storage Management
    // --------------------------------------------------------------------------
    let portfolioData = loadPortfolioData();
    let isInlineEditActive = false;
    let editingProjectId = null;
    let editingEducationId = null;
    let editingAchievementId = null;
    let editingServiceId = null;

    let DEFAULT_ADMIN_PASSWORD = "arulraj#123";

    function getAdminPassword() {
        return localStorage.getItem("portfolio_admin_pwd") || DEFAULT_ADMIN_PASSWORD;
    }

    function setAdminPassword(newPwd) {
        DEFAULT_ADMIN_PASSWORD = newPwd;
        localStorage.setItem("portfolio_admin_pwd", newPwd);
    }

    function isAdminLoggedIn() {
        return sessionStorage.getItem("portfolio_admin_logged_in") === "true";
    }

    function setAdminLoggedIn(status) {
        if (status) {
            sessionStorage.setItem("portfolio_admin_logged_in", "true");
        } else {
            sessionStorage.removeItem("portfolio_admin_logged_in");
        }
    }

    // --------------------------------------------------------------------------
    // Cloud Database Engine (Firebase, Supabase, JSONBin, REST API)
    // --------------------------------------------------------------------------
    const DEFAULT_CLOUD_DB_ENDPOINT = "https://orion-forge-default-rtdb.firebaseio.com";

    function getDbConfig() {
        try {
            const saved = localStorage.getItem("portfolio_db_config");
            if (saved) {
                const parsed = JSON.parse(saved);
                if (!parsed.endpoint) {
                    parsed.endpoint = DEFAULT_CLOUD_DB_ENDPOINT;
                }
                return parsed;
            }
        } catch (e) {}
        return {
            provider: "firebase",
            endpoint: DEFAULT_CLOUD_DB_ENDPOINT,
            apiKey: "",
            autoSync: true
        };
    }

    function setDbConfig(cfg) {
        localStorage.setItem("portfolio_db_config", JSON.stringify(cfg));
    }

    async function loadEnvConfig() {
        try {
            const res = await fetch("./.env");
            if (res.ok) {
                const text = await res.text();
                const lines = text.split("\n");
                const currentCfg = getDbConfig();
                let cfgChanged = false;

                lines.forEach(line => {
                    const trimmed = line.trim();
                    if (trimmed && !trimmed.startsWith("#")) {
                        const parts = trimmed.split("=");
                        const key = parts[0]?.trim()?.toUpperCase();
                        const val = parts.slice(1).join("=").trim().replace(/^["']|["']$/g, "");
                        if ((key === "PASSWORD" || key === "ADMIN_PASSWORD") && val) {
                            DEFAULT_ADMIN_PASSWORD = val;
                        }
                        if (key === "DB_PROVIDER" && val) {
                            currentCfg.provider = val.toLowerCase();
                            cfgChanged = true;
                        }
                        if (key === "DB_ENDPOINT" && val) {
                            currentCfg.endpoint = val;
                            cfgChanged = true;
                        }
                        if (key === "DB_API_KEY" && val) {
                            currentCfg.apiKey = val;
                            cfgChanged = true;
                        }
                    }
                });

                if (cfgChanged) {
                    setDbConfig(currentCfg);
                }
            }
        } catch (e) {
            // Environment file not accessible or offline
        }
    }

    async function fetchCloudDatabase() {
        const cfg = getDbConfig();
        if (!cfg.endpoint) return null;

        if (cfg.provider === "firebase") {
            let url = cfg.endpoint.replace(/\/+$/, "");
            if (!url.endsWith(".json")) url += "/portfolio.json";
            if (cfg.apiKey) url += (url.includes("?") ? "&" : "?") + "auth=" + cfg.apiKey;
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Firebase HTTP ${res.status}`);
            return await res.json();
        } else if (cfg.provider === "supabase") {
            const url = `${cfg.endpoint.replace(/\/+$/, "")}/rest/v1/portfolio?id=eq.1&select=data`;
            const res = await fetch(url, {
                headers: {
                    "apikey": cfg.apiKey,
                    "Authorization": `Bearer ${cfg.apiKey}`
                }
            });
            if (!res.ok) throw new Error(`Supabase HTTP ${res.status}`);
            const data = await res.json();
            return data[0]?.data || data;
        } else if (cfg.provider === "jsonbin") {
            const url = `https://api.jsonbin.io/v3/b/${cfg.endpoint}/latest`;
            const res = await fetch(url, {
                headers: { "X-Master-Key": cfg.apiKey }
            });
            if (!res.ok) throw new Error(`JSONBin HTTP ${res.status}`);
            const json = await res.json();
            return json.record;
        } else {
            // Custom REST
            const res = await fetch(cfg.endpoint, {
                headers: cfg.apiKey ? { "Authorization": `Bearer ${cfg.apiKey}` } : {}
            });
            if (!res.ok) throw new Error(`REST HTTP ${res.status}`);
            return await res.json();
        }
    }

    async function saveToCloudDatabase(data) {
        const cfg = getDbConfig();
        if (!cfg.endpoint) return false;

        if (cfg.provider === "firebase") {
            let url = cfg.endpoint.replace(/\/+$/, "");
            if (!url.endsWith(".json")) url += "/portfolio.json";
            if (cfg.apiKey) url += (url.includes("?") ? "&" : "?") + "auth=" + cfg.apiKey;
            const res = await fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (!res.ok) throw new Error(`Firebase error: ${res.status} ${res.statusText}`);
            return true;
        } else if (cfg.provider === "supabase") {
            const url = `${cfg.endpoint.replace(/\/+$/, "")}/rest/v1/portfolio?id=eq.1`;
            const res = await fetch(url, {
                method: "PATCH",
                headers: {
                    "apikey": cfg.apiKey,
                    "Authorization": `Bearer ${cfg.apiKey}`,
                    "Content-Type": "application/json",
                    "Prefer": "resolution=merge-duplicates"
                },
                body: JSON.stringify({ id: 1, data: data, updated_at: new Date().toISOString() })
            });
            if (!res.ok) throw new Error(`Supabase error: ${res.status}`);
            return true;
        } else if (cfg.provider === "jsonbin") {
            const url = `https://api.jsonbin.io/v3/b/${cfg.endpoint}`;
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    "X-Master-Key": cfg.apiKey,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (!res.ok) throw new Error(`JSONBin error: ${res.status}`);
            return true;
        } else {
            // Custom REST
            const res = await fetch(cfg.endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(cfg.apiKey ? { "Authorization": `Bearer ${cfg.apiKey}` } : {})
                },
                body: JSON.stringify(data)
            });
            if (!res.ok) throw new Error(`Custom REST error: ${res.status}`);
            return true;
        }
    }

    async function syncFromCloudIfAvailable() {
        const cfg = getDbConfig();
        if (!cfg.endpoint) return;

        try {
            console.log("[Portfolio DB] Checking cloud database for deployed updates...");
            const cloudData = await fetchCloudDatabase();
            if (cloudData && typeof cloudData === "object" && (cloudData.hero || cloudData.about)) {
                portfolioData = deepMerge(DEFAULT_PORTFOLIO_DATA, cloudData);
                localStorage.setItem("portfolio_custom_data", JSON.stringify(portfolioData));
                applyPortfolioDataToDOM(portfolioData);
                console.log("[Portfolio DB] Successfully synced latest portfolio entities from Cloud Database!");
            } else if (cloudData === null) {
                // Cloud database is empty - automatically seed initial data!
                console.log("[Portfolio DB] Cloud database is empty. Initializing with default data...");
                await saveToCloudDatabase(portfolioData);
                console.log("[Portfolio DB] Successfully seeded initial portfolio data to Cloud Database!");
            }
        } catch (err) {
            console.warn("[Portfolio DB] Cloud sync unavailable, using local cache:", err.message);
        }
    }

    function loadPortfolioData() {
        try {
            const saved = localStorage.getItem("portfolio_custom_data");
            if (saved) {
                const parsed = JSON.parse(saved);
                return deepMerge(DEFAULT_PORTFOLIO_DATA, parsed);
            }
        } catch (e) {
            console.error("Failed to load portfolio custom data, using defaults:", e);
        }
        return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
    }

    function savePortfolioData(data) {
        portfolioData = data;
        localStorage.setItem("portfolio_custom_data", JSON.stringify(data));
        applyPortfolioDataToDOM(data);

        const cfg = getDbConfig();
        if (cfg.endpoint && cfg.autoSync) {
            saveToCloudDatabase(data)
                .then(() => {
                    showToast("Saved & synced to Cloud Database! Live for all visitors.", "success");
                })
                .catch((err) => {
                    showToast(`Saved locally, but Cloud Database sync failed: ${err.message}`, "error");
                });
        } else {
            showToast("Portfolio entities updated successfully!", "success");
        }
    }

    function deepMerge(target, source) {
        const output = Object.assign({}, target);
        if (isObject(target) && isObject(source)) {
            Object.keys(source).forEach(key => {
                if (isObject(source[key])) {
                    if (!(key in target)) Object.assign(output, { [key]: source[key] });
                    else output[key] = deepMerge(target[key], source[key]);
                } else {
                    Object.assign(output, { [key]: source[key] });
                }
            });
        }
        return output;
    }

    function isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }

    // Expose dynamic titles to typing animation
    window.getPortfolioTitles = function() {
        return portfolioData && portfolioData.hero && portfolioData.hero.titles && portfolioData.hero.titles.length > 0
            ? portfolioData.hero.titles
            : DEFAULT_PORTFOLIO_DATA.hero.titles;
    };

    // --------------------------------------------------------------------------
    // 3. Render / Update DOM from Data
    // --------------------------------------------------------------------------
    function applyPortfolioDataToDOM(data) {
        if (!data) return;

        // --- Hero Section ---
        if (data.hero) {
            const h = data.hero;
            const heroIntro = document.querySelector(".hero-intro");
            if (heroIntro) heroIntro.textContent = h.intro || "Hello, I'm";

            const heroName = document.querySelector(".hero-name");
            if (heroName) heroName.textContent = h.name || "Arul Raj W";

            const heroBadgeText = document.querySelector(".hero-badge .badge-text");
            if (heroBadgeText) heroBadgeText.textContent = h.badge || "Available for Internships & Projects";

            const heroTagline = document.querySelector(".hero-tagline");
            if (heroTagline) heroTagline.textContent = h.tagline || "";

            const profileImg = document.querySelector(".hero-profile-img");
            if (profileImg && h.profileImage) profileImg.src = h.profileImage;

            const resumeBtn = document.getElementById("btnDownloadResume");
            if (resumeBtn) {
                if (h.resumeLink) resumeBtn.href = h.resumeLink;
                if (h.resumeBtnText) resumeBtn.innerHTML = `<i class="fa-solid fa-download"></i> ${h.resumeBtnText}`;
            }

            const contactBtn = document.getElementById("btnContactMe");
            if (contactBtn && h.contactBtnText) {
                contactBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${h.contactBtnText}`;
            }

            const projectsBtn = document.getElementById("btnViewProjects");
            if (projectsBtn && h.projectsBtnText) {
                projectsBtn.innerHTML = `<i class="fa-solid fa-folder-open"></i> ${h.projectsBtnText}`;
            }

            const heroGithub = document.getElementById("heroGithub");
            if (heroGithub && h.github) heroGithub.href = h.github;

            const heroLinkedin = document.getElementById("heroLinkedin");
            if (heroLinkedin && h.linkedin) heroLinkedin.href = h.linkedin;

            if (h.defaultTheme && window.setPortfolioTheme && !sessionStorage.getItem("portfolio-theme-session-override")) {
                window.setPortfolioTheme(h.defaultTheme);
            }
        }

        // --- About Section ---
        if (data.about) {
            const a = data.about;
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                const aboutTextContainer = aboutSection.querySelector(".bento-card.bento-col-8");
                if (aboutTextContainer && a.paragraphs) {
                    const heading = aboutTextContainer.querySelector(".side-heading");
                    const headingHtml = heading ? heading.outerHTML : '<h3 class="side-heading"><i class="fa-solid fa-user"></i> Who I Am</h3>';
                    const paragraphsHtml = a.paragraphs.map(p => `<p class="about-text">${p}</p>`).join("");
                    aboutTextContainer.innerHTML = headingHtml + paragraphsHtml;
                }

                // Details Card
                if (a.details) {
                    const detailItems = aboutSection.querySelectorAll(".personal-details-grid .detail-item");
                    detailItems.forEach(item => {
                        const label = item.querySelector(".detail-label")?.textContent?.trim().toLowerCase();
                        const valElem = item.querySelector(".detail-val");
                        if (!valElem || !label) return;
                        if (label.includes("location") && a.details.location) valElem.textContent = a.details.location;
                        if (label.includes("institution") && a.details.institution) valElem.textContent = a.details.institution;
                        if (label.includes("degree") && a.details.degree) valElem.textContent = a.details.degree;
                        if (label.includes("academics") && a.details.academics) valElem.textContent = a.details.academics;
                    });
                }

                // Focus Cards
                if (a.focusCards && a.focusCards.length >= 3) {
                    const focusCards = aboutSection.querySelectorAll(".bento-grid > .bento-card.bento-col-4:not(:nth-child(2))");
                    focusCards.forEach((card, idx) => {
                        const fc = a.focusCards[idx];
                        if (!fc) return;
                        const iconElem = card.querySelector(".card-icon i");
                        if (iconElem && fc.icon) iconElem.className = fc.icon;
                        const titleElem = card.querySelector("h4");
                        if (titleElem && fc.title) titleElem.textContent = fc.title;
                        const descElem = card.querySelector("p");
                        if (descElem && fc.desc) descElem.textContent = fc.desc;
                    });
                }
            }
        }

        // --- Education Timeline ---
        if (data.education && Array.isArray(data.education)) {
            const timeline = document.querySelector(".timeline");
            if (timeline) {
                const line = '<div class="timeline-line"></div>';
                const itemsHtml = data.education.map((edu, idx) => {
                    const sideClass = idx % 2 === 0 ? "left" : "right";
                    const badgeIcon = edu.badgeIcon || "fa-solid fa-chart-line";
                    return `
                    <div class="timeline-item ${sideClass}" data-id="${edu.id}">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content glass-panel">
                            <span class="timeline-date">${edu.date}</span>
                            <h3>${edu.degree}</h3>
                            <h4 class="institution">${edu.institution}</h4>
                            <p class="stats-badge"><i class="${badgeIcon}"></i> ${edu.badge}</p>
                            <p class="timeline-desc">${edu.desc}</p>
                        </div>
                    </div>`;
                }).join("");
                timeline.innerHTML = line + itemsHtml;
            }
        }

        // --- Skills Matrix ---
        if (data.skills && Array.isArray(data.skills)) {
            const skillsSection = document.getElementById("skills");
            if (skillsSection) {
                const bentoGrid = skillsSection.querySelector(".bento-grid");
                if (bentoGrid) {
                    bentoGrid.innerHTML = data.skills.map(cat => `
                    <div class="bento-card bento-col-6" data-id="${cat.id}">
                        <h3><i class="${cat.icon}"></i> ${cat.title}</h3>
                        <div class="tools-grid">
                            ${cat.skills.map(s => `<div class="tool-badge glass-panel" style="padding: 10px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">${s}</div>`).join("")}
                        </div>
                    </div>`).join("");
                }
            }
        }

        // --- Projects Section ---
        if (data.projects && Array.isArray(data.projects)) {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                const bentoGrid = projectsSection.querySelector(".bento-grid");
                if (bentoGrid) {
                    bentoGrid.innerHTML = data.projects.map(p => {
                        const isFeatured = p.isFeatured;
                        const colClass = isFeatured ? "bento-col-12 featured-card" : (p.features && p.features.length > 0 ? "bento-col-12 standard-card" : "bento-col-6 standard-card");
                        const techBadges = (p.tech || []).map(t => `<span>${t}</span>`).join("");
                        const featuresList = (p.features && p.features.length > 0)
                            ? `<h4 class="features-subheading">Core Functional Systems:</h4>
                               <ul class="features-list">
                                   ${p.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join("")}
                               </ul>`
                            : "";
                        const githubBtn = p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-sm btn-primary"><i class="fa-brands fa-github"></i> GitHub</a>` : "";
                        const caseStudyBtn = p.caseStudy ? `<button class="btn btn-sm btn-secondary open-modal-btn" data-project="${p.caseStudy}"><i class="fa-solid fa-book-open"></i> Case Study</button>` : "";
                        const actionButtons = (githubBtn || caseStudyBtn) ? `<div class="project-buttons">${githubBtn} ${caseStudyBtn}</div>` : "";

                        return `
                        <div class="bento-card ${colClass}" data-category="${p.category}" data-id="${p.id}">
                            <div class="project-image-wrapper">
                                <img src="${p.image}" alt="${p.title}" class="project-img">
                                <div class="project-category-badge">${p.categoryBadge || (p.category === 'ai-ml' ? 'AI / Computer Vision' : 'Web Application')}</div>
                            </div>
                            <div class="project-details">
                                <h3 class="project-title">${p.title}</h3>
                                <p class="project-desc">${p.desc}</p>
                                ${featuresList}
                                <div class="project-tech">${techBadges}</div>
                                ${actionButtons}
                            </div>
                        </div>`;
                    }).join("");

                    // Re-bind modal buttons
                    bindCaseStudyModalButtons();
                }
            }
        }

        // --- Achievements ---
        if (data.achievements && Array.isArray(data.achievements)) {
            const achSection = document.getElementById("achievements");
            if (achSection) {
                const bentoGrid = achSection.querySelector(".bento-grid");
                if (bentoGrid) {
                    bentoGrid.innerHTML = data.achievements.map(ach => `
                    <div class="bento-card bento-col-4 achievement-card" data-id="${ach.id}">
                        <div class="ach-icon"><i class="${ach.icon}"></i></div>
                        <div class="ach-content">
                            <span class="ach-date">${ach.date}</span>
                            <h3>${ach.title}</h3>
                            <h4>${ach.organization}</h4>
                            <p>${ach.desc}</p>
                        </div>
                    </div>`).join("");
                }
            }
        }

        // --- Coding Profiles ---
        if (data.profiles) {
            const p = data.profiles;
            const lc = document.getElementById("profileLeetcode");
            if (lc && p.leetcode) {
                if (p.leetcode.url) lc.href = p.leetcode.url;
                const solved = lc.querySelector(".profile-solved");
                if (solved && p.leetcode.solved) solved.textContent = p.leetcode.solved;
                const badge = lc.querySelector(".badge-tag");
                if (badge && p.leetcode.badge) badge.textContent = p.leetcode.badge;
            }

            const sr = document.getElementById("profileSkillrack");
            if (sr && p.skillrack) {
                if (p.skillrack.url) sr.href = p.skillrack.url;
                const solved = sr.querySelector(".profile-solved");
                if (solved && p.skillrack.solved) solved.textContent = p.skillrack.solved;
                const extra = sr.querySelector(".profile-extra");
                if (extra && p.skillrack.extra) extra.textContent = p.skillrack.extra;
                const badge = sr.querySelector(".badge-tag");
                if (badge && p.skillrack.badge) badge.textContent = p.skillrack.badge;
            }

            const cc = document.getElementById("profileCodechef");
            if (cc && p.codechef) {
                if (p.codechef.url) cc.href = p.codechef.url;
                const solved = cc.querySelector(".profile-solved");
                if (solved && p.codechef.solved) solved.textContent = p.codechef.solved;
                const badge = cc.querySelector(".badge-tag");
                if (badge && p.codechef.badge) badge.textContent = p.codechef.badge;
            }

            const gh = document.getElementById("profileGithub");
            if (gh && p.github) {
                if (p.github.url) gh.href = p.github.url;
                const solved = gh.querySelector(".profile-solved");
                if (solved && p.github.solved) solved.textContent = p.github.solved;
                const badge = gh.querySelector(".badge-tag");
                if (badge && p.github.badge) badge.textContent = p.github.badge;
            }
        }

        // --- Services & Competencies ---
        if (data.services && Array.isArray(data.services)) {
            const srvSection = document.getElementById("services");
            if (srvSection) {
                const bentoGrid = srvSection.querySelector(".bento-grid");
                if (bentoGrid) {
                    bentoGrid.innerHTML = data.services.map(srv => `
                    <div class="bento-card bento-col-4 service-card" data-id="${srv.id}">
                        <div class="service-icon"><i class="${srv.icon}"></i></div>
                        <h3>${srv.title}</h3>
                        <p>${srv.desc}</p>
                    </div>`).join("");
                }
            }
        }

        if (data.competencies && Array.isArray(data.competencies)) {
            const expBadgesContainer = document.querySelector(".experience-badges");
            if (expBadgesContainer) {
                expBadgesContainer.innerHTML = data.competencies.map(c => `<span class="exp-badge">${c}</span>`).join("");
            }
        }

        // --- Contact Info ---
        if (data.contact) {
            const c = data.contact;
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                const descElem = contactSection.querySelector(".contact-desc");
                if (descElem && c.desc) descElem.textContent = c.desc;

                const contactItems = contactSection.querySelectorAll(".contact-card-item");
                contactItems.forEach(item => {
                    const textSpan = item.querySelector(".contact-details-text span")?.textContent?.toLowerCase();
                    const valStrong = item.querySelector(".contact-details-text strong");
                    if (!valStrong || !textSpan) return;
                    if (textSpan.includes("email") && c.email) {
                        valStrong.textContent = c.email;
                        item.href = `mailto:${c.email}`;
                    }
                    if (textSpan.includes("phone") && c.phone) {
                        valStrong.textContent = c.phone;
                        item.href = `tel:${c.phone.replace(/[^0-9+]/g, '')}`;
                    }
                    if (textSpan.includes("location") && c.location) {
                        valStrong.textContent = c.location;
                    }
                });

                const contactGithub = document.getElementById("contactGithub");
                if (contactGithub && c.github) contactGithub.href = c.github;

                const contactLinkedin = document.getElementById("contactLinkedin");
                if (contactLinkedin && c.linkedin) contactLinkedin.href = c.linkedin;
            }
        }

        // --- Footer ---
        if (data.footer) {
            const f = data.footer;
            const footerLeft = document.querySelector(".footer-left p");
            if (footerLeft && f.tagline) footerLeft.textContent = f.tagline;

            const copyright = document.querySelector(".footer-right .copyright");
            if (copyright && f.copyright) copyright.textContent = f.copyright;

            const designer = document.querySelector(".footer-right .designer");
            if (designer && f.designerName) {
                designer.innerHTML = `Designed & Developed by <a href="${f.designerLink || '#'}" target="_blank" rel="noopener">${f.designerName}</a>`;
            }
        }

        // If inline edit mode is active, refresh contenteditable bindings
        if (isInlineEditActive) {
            enableInlineEditing();
        }
    }

    function bindCaseStudyModalButtons() {
        const caseModal = document.getElementById("caseStudyModal");
        const modalBody = document.getElementById("modalBodyContent");
        if (!caseModal || !modalBody) return;

        const openModalBtns = document.querySelectorAll(".open-modal-btn");
        const caseStudies = {
            uav: {
                title: "UAV Disaster Management System",
                tagline: "Aerial Human victim detection utilizing computer vision neural engines",
                content: `
                    <div class="modal-section">
                        <h4>Overview & Architectural Goals</h4>
                        <p>In post-disaster flooding or earthquake settings, tracking and rescuing isolated human survivors represents a high-risk time bottleneck. This system enables standard lightweight drones to process video nodes and recognize humans inside active grid matrices.</p>
                    </div>
                    <div class="modal-section">
                        <h4>The AI Engine Stack</h4>
                        <p>We loaded Ultralytics YOLOv8 onto customized aerial frames. By training on overhead views, bounding coordinates successfully capture humans even when partially obscured by foliage or water bodies.</p>
                    </div>
                    <div class="modal-section">
                        <h4>Backend & Interfaces</h4>
                        <p>The control hub runs a Python Flask engine connected to local SQLite instances. Relayed drone coordinates pop up live on Leaflet Map layers, dispatching automated rescue indicators to relief teams.</p>
                    </div>
                    <div class="modal-section">
                        <h4>Impact & Scalability</h4>
                        <p>Optimized algorithms maintain 28+ FPS inference rates on GPU nodes. Testing records a 92% validation accuracy on custom human silhouette data collections.</p>
                    </div>
                `
            }
        };

        openModalBtns.forEach(btn => {
            btn.onclick = () => {
                const projectKey = btn.getAttribute("data-project");
                const study = caseStudies[projectKey];
                if (study) {
                    modalBody.innerHTML = `
                        <h3 class="modal-project-title">${study.title}</h3>
                        <div class="modal-project-tagline">${study.tagline}</div>
                        <hr style="border: 0; height: 1px; background: var(--border-color); margin-bottom: 24px;">
                        ${study.content}
                    `;
                    caseModal.classList.add("active");
                    document.body.style.overflow = "hidden";
                }
            };
        });
    }

    // --------------------------------------------------------------------------
    // 4. Toast Notifications System
    // --------------------------------------------------------------------------
    function showToast(message, type = "info") {
        let container = document.getElementById("adminToastContainer");
        if (!container) {
            container = document.createElement("div");
            container.id = "adminToastContainer";
            container.className = "admin-toast-container";
            document.body.appendChild(container);
        }

        const toast = document.createElement("div");
        toast.className = `admin-toast ${type}`;
        const icon = type === "success" ? "fa-solid fa-circle-check" : (type === "error" ? "fa-solid fa-circle-exclamation" : "fa-solid fa-info-circle");
        toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("fade-out");
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3200);
    }

    // --------------------------------------------------------------------------
    // 5. Visual Inline Edit Mode
    // --------------------------------------------------------------------------
    function toggleInlineEditMode() {
        isInlineEditActive = !isInlineEditActive;
        const btn = document.getElementById("adminEditModeBtn");
        const indicator = document.getElementById("inlineEditIndicator");

        if (isInlineEditActive) {
            document.body.classList.add("admin-inline-active");
            if (btn) {
                btn.classList.add("active-mode");
                btn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> <span class="tool-label">Inline Edit: ON</span>';
            }
            if (indicator) indicator.classList.add("active");
            enableInlineEditing();
            showToast("Inline Edit Mode ON. Click on any text to modify it directly!", "success");
        } else {
            document.body.classList.remove("admin-inline-active");
            if (btn) {
                btn.classList.remove("active-mode");
                btn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> <span class="tool-label">Inline Edit: OFF</span>';
            }
            if (indicator) indicator.classList.remove("active");
            disableInlineEditing();
            showToast("Inline Edit Mode OFF", "info");
        }
    }

    function enableInlineEditing() {
        const editableSelectors = [
            ".hero-name", ".hero-intro", ".hero-tagline", ".hero-badge .badge-text",
            ".about-text", ".detail-val", "#about h4", "#about .bento-card p",
            ".timeline-item h3", ".timeline-item .institution", ".timeline-date", ".timeline-desc", ".stats-badge",
            ".tool-badge", "#skills h3",
            ".project-title", ".project-desc", ".project-category-badge", ".features-list li", ".project-tech span",
            ".achievement-card h3", ".achievement-card h4", ".achievement-card p", ".ach-date",
            ".profile-card h3", ".profile-solved", ".profile-extra", ".badge-tag",
            ".service-card h3", ".service-card p", ".exp-badge",
            ".contact-desc", ".contact-details-text strong",
            ".footer-left p", ".copyright"
        ];

        document.querySelectorAll(editableSelectors.join(",")).forEach(el => {
            el.setAttribute("contenteditable", "true");
            el.setAttribute("spellcheck", "false");
        });
    }

    function disableInlineEditing() {
        document.querySelectorAll('[contenteditable="true"]').forEach(el => {
            el.removeAttribute("contenteditable");
        });
    }

    function scrapeDOMToData() {
        // Hero
        const nameElem = document.querySelector(".hero-name");
        if (nameElem) portfolioData.hero.name = nameElem.textContent.trim();

        const introElem = document.querySelector(".hero-intro");
        if (introElem) portfolioData.hero.intro = introElem.textContent.trim();

        const badgeElem = document.querySelector(".hero-badge .badge-text");
        if (badgeElem) portfolioData.hero.badge = badgeElem.textContent.trim();

        const taglineElem = document.querySelector(".hero-tagline");
        if (taglineElem) portfolioData.hero.tagline = taglineElem.textContent.trim();

        // About paragraphs
        const pElems = document.querySelectorAll(".about-text");
        if (pElems.length > 0) {
            portfolioData.about.paragraphs = Array.from(pElems).map(p => p.textContent.trim());
        }

        // Details
        const detailItems = document.querySelectorAll(".personal-details-grid .detail-item");
        detailItems.forEach(item => {
            const label = item.querySelector(".detail-label")?.textContent?.trim().toLowerCase();
            const val = item.querySelector(".detail-val")?.textContent?.trim();
            if (!val || !label) return;
            if (label.includes("location")) portfolioData.about.details.location = val;
            if (label.includes("institution")) portfolioData.about.details.institution = val;
            if (label.includes("degree")) portfolioData.about.details.degree = val;
            if (label.includes("academics")) portfolioData.about.details.academics = val;
        });

        // Education
        const eduCards = document.querySelectorAll(".timeline-item");
        eduCards.forEach((card, idx) => {
            if (portfolioData.education[idx]) {
                const date = card.querySelector(".timeline-date")?.textContent?.trim();
                const deg = card.querySelector("h3")?.textContent?.trim();
                const inst = card.querySelector(".institution")?.textContent?.trim();
                const desc = card.querySelector(".timeline-desc")?.textContent?.trim();
                if (date) portfolioData.education[idx].date = date;
                if (deg) portfolioData.education[idx].degree = deg;
                if (inst) portfolioData.education[idx].institution = inst;
                if (desc) portfolioData.education[idx].desc = desc;
            }
        });

        // Projects
        const projCards = document.querySelectorAll("#projects .bento-card");
        projCards.forEach((card, idx) => {
            if (portfolioData.projects[idx]) {
                const title = card.querySelector(".project-title")?.textContent?.trim();
                const desc = card.querySelector(".project-desc")?.textContent?.trim();
                const catBadge = card.querySelector(".project-category-badge")?.textContent?.trim();
                if (title) portfolioData.projects[idx].title = title;
                if (desc) portfolioData.projects[idx].desc = desc;
                if (catBadge) portfolioData.projects[idx].categoryBadge = catBadge;
            }
        });

        // Achievements
        const achCards = document.querySelectorAll(".achievement-card");
        achCards.forEach((card, idx) => {
            if (portfolioData.achievements[idx]) {
                const date = card.querySelector(".ach-date")?.textContent?.trim();
                const title = card.querySelector("h3")?.textContent?.trim();
                const org = card.querySelector("h4")?.textContent?.trim();
                const desc = card.querySelector("p")?.textContent?.trim();
                if (date) portfolioData.achievements[idx].date = date;
                if (title) portfolioData.achievements[idx].title = title;
                if (org) portfolioData.achievements[idx].organization = org;
                if (desc) portfolioData.achievements[idx].desc = desc;
            }
        });

        // Save
        savePortfolioData(portfolioData);
    }

    // --------------------------------------------------------------------------
    // 6. Entity Manager Modal Builder & Tab Logic
    // --------------------------------------------------------------------------
    function openEntityManager() {
        const modal = document.getElementById("adminEntityManagerModal");
        if (modal) {
            renderEntityManagerTabs();
            modal.classList.add("open");
            document.body.style.overflow = "hidden";
        }
    }

    function closeEntityManager() {
        const modal = document.getElementById("adminEntityManagerModal");
        if (modal) {
            modal.classList.remove("open");
            document.body.style.overflow = "";
        }
    }

    function switchEmTab(tabKey) {
        document.querySelectorAll(".em-tab-btn").forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-tab") === tabKey);
        });
        document.querySelectorAll(".em-tab-pane").forEach(pane => {
            pane.classList.toggle("active", pane.id === `emPane-${tabKey}`);
        });
    }

    function renderEntityManagerTabs() {
        renderHeroTab();
        renderAboutTab();
        renderEducationTab();
        renderSkillsTab();
        renderProjectsTab();
        renderAchievementsTab();
        renderProfilesTab();
        renderServicesTab();
        renderContactTab();
        renderDatabaseTab();
        renderSecurityTab();
    }

    // Tab 1: Hero & Bio
    function renderHeroTab() {
        const h = portfolioData.hero || {};
        const pane = document.getElementById("emPane-hero");
        if (!pane) return;

        pane.innerHTML = `
            <div class="em-pane-header">
                <div>
                    <h4>Hero & Personal Identity</h4>
                    <p>Customize primary intro, typing roles, and hero visuals.</p>
                </div>
            </div>
            <form id="emHeroForm">
                <div class="em-form-grid">
                    <div class="em-field-group">
                        <label>Greeting Intro</label>
                        <input type="text" class="em-input" id="emHeroIntro" value="${escapeHtml(h.intro || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Full Name</label>
                        <input type="text" class="em-input" id="emHeroName" value="${escapeHtml(h.name || '')}">
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Rotating Typing Titles (Separated by comma)</label>
                        <input type="text" class="em-input" id="emHeroTitles" value="${escapeHtml((h.titles || []).join(', '))}">
                        <span class="admin-hint">Example: AI Developer, Full Stack Developer, Computer Vision Specialist</span>
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Availability Badge Text</label>
                        <input type="text" class="em-input" id="emHeroBadge" value="${escapeHtml(h.badge || '')}">
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Tagline / Bio</label>
                        <textarea class="em-textarea" id="emHeroTagline" rows="3">${escapeHtml(h.tagline || '')}</textarea>
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Profile Picture</label>
                        <input type="text" class="em-input" id="emHeroImgUrl" placeholder="Image URL or upload local file below" value="${escapeHtml(h.profileImage || '')}">
                        <div class="em-image-preview-wrapper">
                            <img src="${h.profileImage || './static/profile-photo.jpeg'}" alt="Preview" class="em-image-thumb" id="emHeroImgPreview">
                            <label class="em-file-input-label">
                                <i class="fa-solid fa-cloud-arrow-up"></i> Upload Photo
                                <input type="file" id="emHeroFileInput" accept="image/*" style="display:none;">
                            </label>
                        </div>
                    </div>
                    <div class="em-field-group">
                        <label>Resume Link / File Path</label>
                        <input type="text" class="em-input" id="emHeroResume" value="${escapeHtml(h.resumeLink || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Resume Button Text</label>
                        <input type="text" class="em-input" id="emHeroResumeBtnText" value="${escapeHtml(h.resumeBtnText || 'Resume')}">
                    </div>
                    <div class="em-field-group">
                        <label>GitHub Profile Link</label>
                        <input type="text" class="em-input" id="emHeroGithub" value="${escapeHtml(h.github || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>LinkedIn Profile Link</label>
                        <input type="text" class="em-input" id="emHeroLinkedin" value="${escapeHtml(h.linkedin || '')}">
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label><i class="fa-solid fa-palette"></i> Default Portfolio Theme (10 Available)</label>
                        <select class="em-input" id="emHeroTheme">
                            <option value="cyber-cyan" ${h.defaultTheme === 'cyber-cyan' || !h.defaultTheme ? 'selected' : ''}>Cyber Cyan (Default Neon)</option>
                            <option value="matrix-green" ${h.defaultTheme === 'matrix-green' ? 'selected' : ''}>Matrix Green (Hacker Terminal)</option>
                            <option value="synthwave-pink" ${h.defaultTheme === 'synthwave-pink' ? 'selected' : ''}>Synthwave Pink (Retro Neon)</option>
                            <option value="dracula-violet" ${h.defaultTheme === 'dracula-violet' ? 'selected' : ''}>Dracula Purple (Royal Vampire)</option>
                            <option value="tokyo-cobalt" ${h.defaultTheme === 'tokyo-cobalt' ? 'selected' : ''}>Tokyo Cobalt (Electric Blue)</option>
                            <option value="crimson-red" ${h.defaultTheme === 'crimson-red' ? 'selected' : ''}>Crimson Red (Blood Ruby)</option>
                            <option value="solar-amber" ${h.defaultTheme === 'solar-amber' ? 'selected' : ''}>Solar Amber (Solar Gold)</option>
                            <option value="nordic-frost" ${h.defaultTheme === 'nordic-frost' ? 'selected' : ''}>Nordic Frost (Arctic Teal)</option>
                            <option value="pure-light" ${h.defaultTheme === 'pure-light' ? 'selected' : ''}>Clean Pearl (Minimal Slate Light)</option>
                            <option value="warm-sand" ${h.defaultTheme === 'warm-sand' ? 'selected' : ''}>Warm Sand (Terracotta Light)</option>
                        </select>
                        <span class="admin-hint">The primary theme shown to visitors on your deployed website by default.</span>
                    </div>
                </div>
                <div class="em-footer-save">
                    <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Save Hero Entities</button>
                </div>
            </form>
        `;

        // Handle image upload
        const fileInput = document.getElementById("emHeroFileInput");
        const imgInput = document.getElementById("emHeroImgUrl");
        const preview = document.getElementById("emHeroImgPreview");

        if (fileInput) {
            fileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const dataUrl = event.target.result;
                        imgInput.value = dataUrl;
                        if (preview) preview.src = dataUrl;
                    };
                    reader.readAsDataURL(file);
                }
            };
        }

        if (imgInput) {
            imgInput.oninput = () => {
                if (preview) preview.src = imgInput.value;
            };
        }

        // Form Submit
        const form = document.getElementById("emHeroForm");
        form.onsubmit = (e) => {
            e.preventDefault();
            portfolioData.hero.intro = document.getElementById("emHeroIntro").value.trim();
            portfolioData.hero.name = document.getElementById("emHeroName").value.trim();
            portfolioData.hero.titles = document.getElementById("emHeroTitles").value.split(",").map(s => s.trim()).filter(Boolean);
            portfolioData.hero.badge = document.getElementById("emHeroBadge").value.trim();
            portfolioData.hero.tagline = document.getElementById("emHeroTagline").value.trim();
            portfolioData.hero.profileImage = document.getElementById("emHeroImgUrl").value.trim();
            portfolioData.hero.resumeLink = document.getElementById("emHeroResume").value.trim();
            portfolioData.hero.resumeBtnText = document.getElementById("emHeroResumeBtnText").value.trim();
            portfolioData.hero.github = document.getElementById("emHeroGithub").value.trim();
            portfolioData.hero.linkedin = document.getElementById("emHeroLinkedin").value.trim();
            if (document.getElementById("emHeroTheme")) {
                const selTheme = document.getElementById("emHeroTheme").value;
                portfolioData.hero.defaultTheme = selTheme;
                if (window.setPortfolioTheme) {
                    window.setPortfolioTheme(selTheme);
                }
            }
            savePortfolioData(portfolioData);
        };
    }

    // Tab 2: About & Details
    function renderAboutTab() {
        const a = portfolioData.about || {};
        const pane = document.getElementById("emPane-about");
        if (!pane) return;

        const paragraphsHtml = (a.paragraphs || []).map((p, i) => `
            <div class="em-field-group em-form-col-full" style="position:relative;">
                <label>Paragraph ${i + 1}</label>
                <textarea class="em-textarea about-para-input" rows="3">${escapeHtml(p)}</textarea>
                ${(a.paragraphs.length > 1) ? `<button type="button" class="em-action-btn delete remove-para-btn" data-index="${i}" style="position:absolute; right:0; top:0;" title="Delete Paragraph"><i class="fa-solid fa-trash"></i></button>` : ''}
            </div>
        `).join("");

        const focusCardsHtml = (a.focusCards || []).map((fc, i) => `
            <div class="em-item-card" style="margin-bottom:12px;">
                <div class="em-item-info">
                    <div class="em-form-grid">
                        <div class="em-field-group">
                            <label>Card ${i + 1} Icon (FontAwesome)</label>
                            <input type="text" class="em-input focus-card-icon" value="${escapeHtml(fc.icon)}">
                        </div>
                        <div class="em-field-group">
                            <label>Title</label>
                            <input type="text" class="em-input focus-card-title" value="${escapeHtml(fc.title)}">
                        </div>
                        <div class="em-field-group em-form-col-full">
                            <label>Description</label>
                            <input type="text" class="em-input focus-card-desc" value="${escapeHtml(fc.desc)}">
                        </div>
                    </div>
                </div>
            </div>
        `).join("");

        pane.innerHTML = `
            <div class="em-pane-header">
                <div>
                    <h4>About Me & Personal Details</h4>
                    <p>Edit biography text, institutional credentials, and special focus cards.</p>
                </div>
            </div>
            <form id="emAboutForm">
                <h5 style="color:#00f0ff; margin-bottom:12px;"><i class="fa-solid fa-user"></i> Who I Am Bio Paragraphs</h5>
                <div id="aboutParasContainer">
                    ${paragraphsHtml}
                </div>
                <button type="button" class="btn btn-sm btn-secondary" id="addAboutParaBtn" style="margin-bottom:24px;">
                    <i class="fa-solid fa-plus"></i> Add Another Paragraph
                </button>

                <h5 style="color:#00f0ff; margin-bottom:12px;"><i class="fa-solid fa-address-card"></i> Personal Details Card</h5>
                <div class="em-form-grid" style="margin-bottom:24px;">
                    <div class="em-field-group">
                        <label>Location</label>
                        <input type="text" class="em-input" id="emAboutLocation" value="${escapeHtml(a.details?.location || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Institution</label>
                        <input type="text" class="em-input" id="emAboutInstitution" value="${escapeHtml(a.details?.institution || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Degree</label>
                        <input type="text" class="em-input" id="emAboutDegree" value="${escapeHtml(a.details?.degree || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Academics (CGPA / Marks)</label>
                        <input type="text" class="em-input" id="emAboutAcademics" value="${escapeHtml(a.details?.academics || '')}">
                    </div>
                </div>

                <h5 style="color:#00f0ff; margin-bottom:12px;"><i class="fa-solid fa-compass"></i> Focus Areas (3 Cards)</h5>
                <div id="focusCardsContainer">
                    ${focusCardsHtml}
                </div>

                <div class="em-footer-save">
                    <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Save About Entities</button>
                </div>
            </form>
        `;

        // Add paragraph button
        const addParaBtn = document.getElementById("addAboutParaBtn");
        if (addParaBtn) {
            addParaBtn.onclick = () => {
                portfolioData.about.paragraphs.push("New paragraph about your skills, experiences, and journey...");
                renderAboutTab();
            };
        }

        // Delete paragraph buttons
        pane.querySelectorAll(".remove-para-btn").forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                portfolioData.about.paragraphs.splice(idx, 1);
                renderAboutTab();
            };
        });

        // Form Submit
        const form = document.getElementById("emAboutForm");
        form.onsubmit = (e) => {
            e.preventDefault();
            const paras = Array.from(pane.querySelectorAll(".about-para-input")).map(t => t.value.trim()).filter(Boolean);
            portfolioData.about.paragraphs = paras;
            portfolioData.about.details = {
                location: document.getElementById("emAboutLocation").value.trim(),
                institution: document.getElementById("emAboutInstitution").value.trim(),
                degree: document.getElementById("emAboutDegree").value.trim(),
                academics: document.getElementById("emAboutAcademics").value.trim()
            };

            const icons = pane.querySelectorAll(".focus-card-icon");
            const titles = pane.querySelectorAll(".focus-card-title");
            const descs = pane.querySelectorAll(".focus-card-desc");
            portfolioData.about.focusCards = [];
            for (let i = 0; i < icons.length; i++) {
                portfolioData.about.focusCards.push({
                    icon: icons[i].value.trim(),
                    title: titles[i].value.trim(),
                    desc: descs[i].value.trim()
                });
            }

            savePortfolioData(portfolioData);
        };
    }

    // Tab 3: Education Timeline
    function renderEducationTab() {
        const pane = document.getElementById("emPane-education");
        if (!pane) return;

        const eduList = portfolioData.education || [];

        const itemsHtml = eduList.map((edu, idx) => `
            <div class="em-item-card" data-id="${edu.id}">
                <div class="em-item-info">
                    <div class="em-item-title"><i class="fa-solid fa-graduation-cap" style="color:#00f0ff;"></i> ${escapeHtml(edu.degree)}</div>
                    <div class="em-item-sub"><strong>${escapeHtml(edu.institution)}</strong> (${escapeHtml(edu.date)}) • ${escapeHtml(edu.badge)}</div>
                </div>
                <div class="em-item-actions">
                    <button type="button" class="em-action-btn edit-edu-btn" data-index="${idx}" title="Edit"><i class="fa-solid fa-pencil"></i></button>
                    <button type="button" class="em-action-btn delete delete-edu-btn" data-index="${idx}" title="Delete"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `).join("");

        pane.innerHTML = `
            <div class="em-pane-header">
                <div>
                    <h4>Education Timeline</h4>
                    <p>Add, edit, or remove your academic qualifications.</p>
                </div>
                <button type="button" class="btn btn-sm btn-primary" id="openAddEduBtn">
                    <i class="fa-solid fa-plus"></i> Add Education
                </button>
            </div>
            <div id="eduFormContainer" style="display:none; margin-bottom:24px;" class="em-item-card"></div>
            <div class="em-cards-list">
                ${itemsHtml}
            </div>
        `;

        const formContainer = document.getElementById("eduFormContainer");

        document.getElementById("openAddEduBtn").onclick = () => {
            editingEducationId = null;
            showEducationForm(formContainer, {});
        };

        pane.querySelectorAll(".edit-edu-btn").forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                editingEducationId = portfolioData.education[idx].id;
                showEducationForm(formContainer, portfolioData.education[idx]);
            };
        });

        pane.querySelectorAll(".delete-edu-btn").forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                if (confirm(`Delete ${portfolioData.education[idx].degree}?`)) {
                    portfolioData.education.splice(idx, 1);
                    savePortfolioData(portfolioData);
                    renderEducationTab();
                }
            };
        });
    }

    function showEducationForm(container, edu) {
        container.style.display = "block";
        container.innerHTML = `
            <form id="saveEduForm" style="width:100%;">
                <h5 style="color:#00f0ff; margin-bottom:16px;">${edu.id ? 'Edit Education Entry' : 'Add New Education Entry'}</h5>
                <div class="em-form-grid">
                    <div class="em-field-group">
                        <label>Degree / Qualification</label>
                        <input type="text" class="em-input" id="eduDegree" required value="${escapeHtml(edu.degree || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Institution Name</label>
                        <input type="text" class="em-input" id="eduInstitution" required value="${escapeHtml(edu.institution || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Duration / Years</label>
                        <input type="text" class="em-input" id="eduDate" placeholder="e.g. 2025 – 2029" required value="${escapeHtml(edu.date || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Score / Percentage / CGPA</label>
                        <input type="text" class="em-input" id="eduBadge" placeholder="e.g. CGPA: 8.82 or Percentage: 91%" required value="${escapeHtml(edu.badge || '')}">
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Description</label>
                        <textarea class="em-textarea" id="eduDesc" rows="3">${escapeHtml(edu.desc || '')}</textarea>
                    </div>
                </div>
                <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:16px;">
                    <button type="button" class="btn btn-sm btn-secondary" id="cancelEduFormBtn">Cancel</button>
                    <button type="submit" class="btn btn-sm btn-primary"><i class="fa-solid fa-check"></i> Save Entry</button>
                </div>
            </form>
        `;

        document.getElementById("cancelEduFormBtn").onclick = () => {
            container.style.display = "none";
        };

        document.getElementById("saveEduForm").onsubmit = (e) => {
            e.preventDefault();
            const entry = {
                id: editingEducationId || `edu-${Date.now()}`,
                degree: document.getElementById("eduDegree").value.trim(),
                institution: document.getElementById("eduInstitution").value.trim(),
                date: document.getElementById("eduDate").value.trim(),
                badge: document.getElementById("eduBadge").value.trim(),
                badgeIcon: "fa-solid fa-chart-line",
                desc: document.getElementById("eduDesc").value.trim()
            };

            if (editingEducationId) {
                const idx = portfolioData.education.findIndex(item => item.id === editingEducationId);
                if (idx !== -1) portfolioData.education[idx] = entry;
            } else {
                portfolioData.education.unshift(entry);
            }

            savePortfolioData(portfolioData);
            renderEducationTab();
        };
    }

    // Tab 4: Skills Matrix
    function renderSkillsTab() {
        const pane = document.getElementById("emPane-skills");
        if (!pane) return;

        const categories = portfolioData.skills || [];

        const categoriesHtml = categories.map((cat, catIdx) => `
            <div class="em-item-card" style="margin-bottom:16px; flex-direction:column; align-items:flex-start;">
                <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
                    <div class="em-item-title"><i class="${cat.icon}" style="color:#00f0ff;"></i> ${escapeHtml(cat.title)}</div>
                    <button type="button" class="em-action-btn delete delete-cat-btn" data-catindex="${catIdx}" title="Delete Category"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div class="em-tags-cloud" id="tagsCloud-${catIdx}">
                    ${cat.skills.map((s, sIdx) => `
                        <span class="em-tag-chip">
                            ${escapeHtml(s)}
                            <i class="fa-solid fa-xmark em-tag-remove" data-catindex="${catIdx}" data-skillindex="${sIdx}"></i>
                        </span>
                    `).join("")}
                </div>
                <div class="em-add-tag-box" style="width:100%; margin-top:12px;">
                    <input type="text" class="em-input" id="newSkillInput-${catIdx}" placeholder="Add new skill tag (e.g. PyTorch, TypeScript)...">
                    <button type="button" class="btn btn-sm btn-secondary add-skill-tag-btn" data-catindex="${catIdx}">
                        <i class="fa-solid fa-plus"></i> Add
                    </button>
                </div>
            </div>
        `).join("");

        pane.innerHTML = `
            <div class="em-pane-header">
                <div>
                    <h4>Technical Skills Matrix</h4>
                    <p>Organize technical competencies by category and manage skill badges.</p>
                </div>
                <button type="button" class="btn btn-sm btn-primary" id="openAddCategoryBtn">
                    <i class="fa-solid fa-plus"></i> Add Category
                </button>
            </div>
            <div id="addCategoryFormContainer" style="display:none; margin-bottom:20px;" class="em-item-card">
                <form id="addCategoryForm" style="width:100%;">
                    <h5 style="color:#00f0ff; margin-bottom:12px;">Add New Skill Category</h5>
                    <div class="em-form-grid">
                        <div class="em-field-group">
                            <label>Category Title</label>
                            <input type="text" class="em-input" id="newCatTitle" placeholder="e.g. Cloud & DevOps" required>
                        </div>
                        <div class="em-field-group">
                            <label>FontAwesome Icon</label>
                            <input type="text" class="em-input" id="newCatIcon" placeholder="e.g. fa-solid fa-cloud" required value="fa-solid fa-code">
                        </div>
                    </div>
                    <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:12px;">
                        <button type="button" class="btn btn-sm btn-secondary" id="cancelCatBtn">Cancel</button>
                        <button type="submit" class="btn btn-sm btn-primary">Create Category</button>
                    </div>
                </form>
            </div>
            ${categoriesHtml}
        `;

        // Handle Add Category
        const addCatContainer = document.getElementById("addCategoryFormContainer");
        document.getElementById("openAddCategoryBtn").onclick = () => {
            addCatContainer.style.display = "block";
        };
        document.getElementById("cancelCatBtn").onclick = () => {
            addCatContainer.style.display = "none";
        };
        document.getElementById("addCategoryForm").onsubmit = (e) => {
            e.preventDefault();
            const title = document.getElementById("newCatTitle").value.trim();
            const icon = document.getElementById("newCatIcon").value.trim();
            portfolioData.skills.push({
                id: `cat-${Date.now()}`,
                icon: icon,
                title: title,
                skills: []
            });
            savePortfolioData(portfolioData);
            renderSkillsTab();
        };

        // Handle Delete Category
        pane.querySelectorAll(".delete-cat-btn").forEach(btn => {
            btn.onclick = () => {
                const catIdx = parseInt(btn.getAttribute("data-catindex"));
                if (confirm(`Delete ${portfolioData.skills[catIdx].title}?`)) {
                    portfolioData.skills.splice(catIdx, 1);
                    savePortfolioData(portfolioData);
                    renderSkillsTab();
                }
            };
        });

        // Handle Remove Tag
        pane.querySelectorAll(".em-tag-remove").forEach(tagBtn => {
            tagBtn.onclick = () => {
                const catIdx = parseInt(tagBtn.getAttribute("data-catindex"));
                const skillIdx = parseInt(tagBtn.getAttribute("data-skillindex"));
                portfolioData.skills[catIdx].skills.splice(skillIdx, 1);
                savePortfolioData(portfolioData);
                renderSkillsTab();
            };
        });

        // Handle Add Tag
        pane.querySelectorAll(".add-skill-tag-btn").forEach(btn => {
            btn.onclick = () => {
                const catIdx = parseInt(btn.getAttribute("data-catindex"));
                const input = document.getElementById(`newSkillInput-${catIdx}`);
                const val = input.value.trim();
                if (val) {
                    portfolioData.skills[catIdx].skills.push(val);
                    input.value = "";
                    savePortfolioData(portfolioData);
                    renderSkillsTab();
                }
            };
        });
    }

    // Tab 5: Projects
    function renderProjectsTab() {
        const pane = document.getElementById("emPane-projects");
        if (!pane) return;

        const projects = portfolioData.projects || [];

        const itemsHtml = projects.map((p, idx) => `
            <div class="em-item-card" data-id="${p.id}">
                <img src="${p.image}" alt="${p.title}" style="width:50px; height:50px; border-radius:8px; object-fit:cover; border:1px solid rgba(0,240,255,0.3);">
                <div class="em-item-info">
                    <div class="em-item-title">${escapeHtml(p.title)} ${p.isFeatured ? '<span class="admin-hint" style="color:#00ffd2;">(Featured)</span>' : ''}</div>
                    <div class="em-item-sub">${escapeHtml(p.categoryBadge || p.category)} • ${(p.tech || []).join(", ")}</div>
                </div>
                <div class="em-item-actions">
                    <button type="button" class="em-action-btn edit-proj-btn" data-index="${idx}" title="Edit"><i class="fa-solid fa-pencil"></i></button>
                    <button type="button" class="em-action-btn delete delete-proj-btn" data-index="${idx}" title="Delete"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `).join("");

        pane.innerHTML = `
            <div class="em-pane-header">
                <div>
                    <h4>Featured & Standard Projects</h4>
                    <p>Manage portfolio showcase projects, imagery, tags, and links.</p>
                </div>
                <button type="button" class="btn btn-sm btn-primary" id="openAddProjectBtn">
                    <i class="fa-solid fa-plus"></i> Add Project
                </button>
            </div>
            <div id="projectFormContainer" style="display:none; margin-bottom:24px;" class="em-item-card"></div>
            <div class="em-cards-list">
                ${itemsHtml}
            </div>
        `;

        const formContainer = document.getElementById("projectFormContainer");

        document.getElementById("openAddProjectBtn").onclick = () => {
            editingProjectId = null;
            showProjectForm(formContainer, {});
        };

        pane.querySelectorAll(".edit-proj-btn").forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                editingProjectId = portfolioData.projects[idx].id;
                showProjectForm(formContainer, portfolioData.projects[idx]);
            };
        });

        pane.querySelectorAll(".delete-proj-btn").forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                if (confirm(`Delete project ${portfolioData.projects[idx].title}?`)) {
                    portfolioData.projects.splice(idx, 1);
                    savePortfolioData(portfolioData);
                    renderProjectsTab();
                }
            };
        });
    }

    function showProjectForm(container, proj) {
        container.style.display = "block";
        container.innerHTML = `
            <form id="saveProjectForm" style="width:100%;">
                <h5 style="color:#00f0ff; margin-bottom:16px;">${proj.id ? 'Edit Project' : 'Add New Project'}</h5>
                <div class="em-form-grid">
                    <div class="em-field-group">
                        <label>Project Title</label>
                        <input type="text" class="em-input" id="projTitle" required value="${escapeHtml(proj.title || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Category Filter</label>
                        <select class="em-select" id="projCategory">
                            <option value="ai-ml" ${proj.category === 'ai-ml' ? 'selected' : ''}>AI & Computer Vision</option>
                            <option value="web-dev" ${proj.category === 'web-dev' ? 'selected' : ''}>Web Development</option>
                        </select>
                    </div>
                    <div class="em-field-group">
                        <label>Badge Label (e.g. Featured - Marine Intelligence)</label>
                        <input type="text" class="em-input" id="projBadge" value="${escapeHtml(proj.categoryBadge || '')}">
                    </div>
                    <div class="em-field-group" style="display:flex; justify-content:center; align-items:flex-start; padding-top:24px;">
                        <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                            <input type="checkbox" id="projFeatured" ${proj.isFeatured ? 'checked' : ''} style="width:18px; height:18px;">
                            <span>Mark as Featured Flagship Card</span>
                        </label>
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Project Cover Image</label>
                        <input type="text" class="em-input" id="projImgUrl" placeholder="Image URL or upload below" value="${escapeHtml(proj.image || '')}">
                        <div class="em-image-preview-wrapper">
                            <img src="${proj.image || './assets/images/oceanix.jpg'}" alt="Preview" class="em-image-thumb" id="projImgPreview">
                            <label class="em-file-input-label">
                                <i class="fa-solid fa-cloud-arrow-up"></i> Upload Project Image
                                <input type="file" id="projFileInput" accept="image/*" style="display:none;">
                            </label>
                        </div>
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Description</label>
                        <textarea class="em-textarea" id="projDesc" rows="3" required>${escapeHtml(proj.desc || '')}</textarea>
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Key Features (One bullet per line)</label>
                        <textarea class="em-textarea" id="projFeatures" rows="3" placeholder="Real-time Human Detection&#10;Integrated rescue coordination maps">${escapeHtml((proj.features || []).join('\n'))}</textarea>
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Technologies Used (Comma separated)</label>
                        <input type="text" class="em-input" id="projTech" placeholder="Python, YOLOv8, Flask, SQLite" value="${escapeHtml((proj.tech || []).join(', '))}">
                    </div>
                    <div class="em-field-group">
                        <label>GitHub Repository URL</label>
                        <input type="text" class="em-input" id="projGithub" value="${escapeHtml(proj.github || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Case Study Key (Optional)</label>
                        <input type="text" class="em-input" id="projCaseStudy" placeholder="uav or leave blank" value="${escapeHtml(proj.caseStudy || '')}">
                    </div>
                </div>
                <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:16px;">
                    <button type="button" class="btn btn-sm btn-secondary" id="cancelProjFormBtn">Cancel</button>
                    <button type="submit" class="btn btn-sm btn-primary"><i class="fa-solid fa-check"></i> Save Project</button>
                </div>
            </form>
        `;

        // Image upload handler
        const fileInput = document.getElementById("projFileInput");
        const imgInput = document.getElementById("projImgUrl");
        const preview = document.getElementById("projImgPreview");

        if (fileInput) {
            fileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const dataUrl = event.target.result;
                        imgInput.value = dataUrl;
                        if (preview) preview.src = dataUrl;
                    };
                    reader.readAsDataURL(file);
                }
            };
        }

        if (imgInput) {
            imgInput.oninput = () => {
                if (preview) preview.src = imgInput.value;
            };
        }

        document.getElementById("cancelProjFormBtn").onclick = () => {
            container.style.display = "none";
        };

        document.getElementById("saveProjectForm").onsubmit = (e) => {
            e.preventDefault();
            const entry = {
                id: editingProjectId || `proj-${Date.now()}`,
                title: document.getElementById("projTitle").value.trim(),
                category: document.getElementById("projCategory").value,
                categoryBadge: document.getElementById("projBadge").value.trim(),
                isFeatured: document.getElementById("projFeatured").checked,
                image: document.getElementById("projImgUrl").value.trim() || "./assets/images/oceanix.jpg",
                desc: document.getElementById("projDesc").value.trim(),
                features: document.getElementById("projFeatures").value.split("\n").map(s => s.trim()).filter(Boolean),
                tech: document.getElementById("projTech").value.split(",").map(s => s.trim()).filter(Boolean),
                github: document.getElementById("projGithub").value.trim(),
                caseStudy: document.getElementById("projCaseStudy").value.trim()
            };

            if (editingProjectId) {
                const idx = portfolioData.projects.findIndex(item => item.id === editingProjectId);
                if (idx !== -1) portfolioData.projects[idx] = entry;
            } else {
                portfolioData.projects.push(entry);
            }

            savePortfolioData(portfolioData);
            renderProjectsTab();
        };
    }

    // Tab 6: Achievements
    function renderAchievementsTab() {
        const pane = document.getElementById("emPane-achievements");
        if (!pane) return;

        const achievements = portfolioData.achievements || [];

        const itemsHtml = achievements.map((ach, idx) => `
            <div class="em-item-card" data-id="${ach.id}">
                <div class="em-item-info">
                    <div class="em-item-title"><i class="${ach.icon}" style="color:#00f0ff;"></i> ${escapeHtml(ach.title)}</div>
                    <div class="em-item-sub"><strong>${escapeHtml(ach.organization)}</strong> • ${escapeHtml(ach.date)}</div>
                </div>
                <div class="em-item-actions">
                    <button type="button" class="em-action-btn edit-ach-btn" data-index="${idx}" title="Edit"><i class="fa-solid fa-pencil"></i></button>
                    <button type="button" class="em-action-btn delete delete-ach-btn" data-index="${idx}" title="Delete"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `).join("");

        pane.innerHTML = `
            <div class="em-pane-header">
                <div>
                    <h4>Key Achievements & Honors</h4>
                    <p>Add, edit, or remove hackathon honors, competition awards, and rankings.</p>
                </div>
                <button type="button" class="btn btn-sm btn-primary" id="openAddAchBtn">
                    <i class="fa-solid fa-plus"></i> Add Achievement
                </button>
            </div>
            <div id="achFormContainer" style="display:none; margin-bottom:24px;" class="em-item-card"></div>
            <div class="em-cards-list">
                ${itemsHtml}
            </div>
        `;

        const formContainer = document.getElementById("achFormContainer");

        document.getElementById("openAddAchBtn").onclick = () => {
            editingAchievementId = null;
            showAchievementForm(formContainer, {});
        };

        pane.querySelectorAll(".edit-ach-btn").forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                editingAchievementId = portfolioData.achievements[idx].id;
                showAchievementForm(formContainer, portfolioData.achievements[idx]);
            };
        });

        pane.querySelectorAll(".delete-ach-btn").forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                if (confirm(`Delete achievement ${portfolioData.achievements[idx].title}?`)) {
                    portfolioData.achievements.splice(idx, 1);
                    savePortfolioData(portfolioData);
                    renderAchievementsTab();
                }
            };
        });
    }

    function showAchievementForm(container, ach) {
        container.style.display = "block";
        container.innerHTML = `
            <form id="saveAchForm" style="width:100%;">
                <h5 style="color:#00f0ff; margin-bottom:16px;">${ach.id ? 'Edit Achievement' : 'Add New Achievement'}</h5>
                <div class="em-form-grid">
                    <div class="em-field-group">
                        <label>Award / Title</label>
                        <input type="text" class="em-input" id="achTitle" required value="${escapeHtml(ach.title || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Event / Organization</label>
                        <input type="text" class="em-input" id="achOrg" required value="${escapeHtml(ach.organization || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Date / Year</label>
                        <input type="text" class="em-input" id="achDate" placeholder="e.g. June 2026 or 2025" required value="${escapeHtml(ach.date || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>FontAwesome Icon</label>
                        <input type="text" class="em-input" id="achIcon" required value="${escapeHtml(ach.icon || 'fa-solid fa-trophy')}">
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Description</label>
                        <textarea class="em-textarea" id="achDesc" rows="3" required>${escapeHtml(ach.desc || '')}</textarea>
                    </div>
                </div>
                <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:16px;">
                    <button type="button" class="btn btn-sm btn-secondary" id="cancelAchFormBtn">Cancel</button>
                    <button type="submit" class="btn btn-sm btn-primary"><i class="fa-solid fa-check"></i> Save Achievement</button>
                </div>
            </form>
        `;

        document.getElementById("cancelAchFormBtn").onclick = () => {
            container.style.display = "none";
        };

        document.getElementById("saveAchForm").onsubmit = (e) => {
            e.preventDefault();
            const entry = {
                id: editingAchievementId || `ach-${Date.now()}`,
                title: document.getElementById("achTitle").value.trim(),
                organization: document.getElementById("achOrg").value.trim(),
                date: document.getElementById("achDate").value.trim(),
                icon: document.getElementById("achIcon").value.trim(),
                desc: document.getElementById("achDesc").value.trim()
            };

            if (editingAchievementId) {
                const idx = portfolioData.achievements.findIndex(item => item.id === editingAchievementId);
                if (idx !== -1) portfolioData.achievements[idx] = entry;
            } else {
                portfolioData.achievements.unshift(entry);
            }

            savePortfolioData(portfolioData);
            renderAchievementsTab();
        };
    }

    // Tab 7: Coding Profiles
    function renderProfilesTab() {
        const pane = document.getElementById("emPane-profiles");
        if (!pane) return;

        const p = portfolioData.profiles || {};

        pane.innerHTML = `
            <div class="em-pane-header">
                <div>
                    <h4>Competitive Coding Profiles</h4>
                    <p>Update problem counters, focus tags, and external profile URLs.</p>
                </div>
            </div>
            <form id="emProfilesForm">
                <h5 style="color:#00f0ff; margin-bottom:12px;"><i class="fa-solid fa-code-compare"></i> LeetCode</h5>
                <div class="em-form-grid" style="margin-bottom:20px;">
                    <div class="em-field-group">
                        <label>Solved Counter Text</label>
                        <input type="text" class="em-input" id="lcSolved" value="${escapeHtml(p.leetcode?.solved || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Focus Tag</label>
                        <input type="text" class="em-input" id="lcBadge" value="${escapeHtml(p.leetcode?.badge || '')}">
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Profile URL</label>
                        <input type="text" class="em-input" id="lcUrl" value="${escapeHtml(p.leetcode?.url || '')}">
                    </div>
                </div>

                <h5 style="color:#00f0ff; margin-bottom:12px;"><i class="fa-solid fa-cube"></i> SkillRack</h5>
                <div class="em-form-grid" style="margin-bottom:20px;">
                    <div class="em-field-group">
                        <label>Solved Counter Text</label>
                        <input type="text" class="em-input" id="srSolved" value="${escapeHtml(p.skillrack?.solved || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Extra Badge Info</label>
                        <input type="text" class="em-input" id="srExtra" value="${escapeHtml(p.skillrack?.extra || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Tag</label>
                        <input type="text" class="em-input" id="srBadge" value="${escapeHtml(p.skillrack?.badge || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Profile URL</label>
                        <input type="text" class="em-input" id="srUrl" value="${escapeHtml(p.skillrack?.url || '')}">
                    </div>
                </div>

                <h5 style="color:#00f0ff; margin-bottom:12px;"><i class="fa-solid fa-utensils"></i> CodeChef</h5>
                <div class="em-form-grid" style="margin-bottom:20px;">
                    <div class="em-field-group">
                        <label>Solved Counter Text</label>
                        <input type="text" class="em-input" id="ccSolved" value="${escapeHtml(p.codechef?.solved || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Tag</label>
                        <input type="text" class="em-input" id="ccBadge" value="${escapeHtml(p.codechef?.badge || '')}">
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Profile URL</label>
                        <input type="text" class="em-input" id="ccUrl" value="${escapeHtml(p.codechef?.url || '')}">
                    </div>
                </div>

                <h5 style="color:#00f0ff; margin-bottom:12px;"><i class="fa-brands fa-github"></i> GitHub</h5>
                <div class="em-form-grid" style="margin-bottom:20px;">
                    <div class="em-field-group">
                        <label>Committer Status</label>
                        <input type="text" class="em-input" id="ghSolved" value="${escapeHtml(p.github?.solved || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Tag</label>
                        <input type="text" class="em-input" id="ghBadge" value="${escapeHtml(p.github?.badge || '')}">
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Profile URL</label>
                        <input type="text" class="em-input" id="ghUrl" value="${escapeHtml(p.github?.url || '')}">
                    </div>
                </div>

                <div class="em-footer-save">
                    <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Save Profiles Data</button>
                </div>
            </form>
        `;

        document.getElementById("emProfilesForm").onsubmit = (e) => {
            e.preventDefault();
            portfolioData.profiles = {
                leetcode: {
                    solved: document.getElementById("lcSolved").value.trim(),
                    badge: document.getElementById("lcBadge").value.trim(),
                    url: document.getElementById("lcUrl").value.trim()
                },
                skillrack: {
                    solved: document.getElementById("srSolved").value.trim(),
                    extra: document.getElementById("srExtra").value.trim(),
                    badge: document.getElementById("srBadge").value.trim(),
                    url: document.getElementById("srUrl").value.trim()
                },
                codechef: {
                    solved: document.getElementById("ccSolved").value.trim(),
                    badge: document.getElementById("ccBadge").value.trim(),
                    url: document.getElementById("ccUrl").value.trim()
                },
                github: {
                    solved: document.getElementById("ghSolved").value.trim(),
                    badge: document.getElementById("ghBadge").value.trim(),
                    url: document.getElementById("ghUrl").value.trim()
                }
            };
            savePortfolioData(portfolioData);
        };
    }

    // Tab 8: Services & Competencies
    function renderServicesTab() {
        const pane = document.getElementById("emPane-services");
        if (!pane) return;

        const services = portfolioData.services || [];
        const competencies = portfolioData.competencies || [];

        const servicesHtml = services.map((srv, idx) => `
            <div class="em-item-card" data-id="${srv.id}">
                <div class="em-item-info">
                    <div class="em-item-title"><i class="${srv.icon}" style="color:#00f0ff;"></i> ${escapeHtml(srv.title)}</div>
                    <div class="em-item-sub">${escapeHtml(srv.desc)}</div>
                </div>
                <div class="em-item-actions">
                    <button type="button" class="em-action-btn edit-srv-btn" data-index="${idx}" title="Edit"><i class="fa-solid fa-pencil"></i></button>
                    <button type="button" class="em-action-btn delete delete-srv-btn" data-index="${idx}" title="Delete"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `).join("");

        const compBadgesHtml = competencies.map((c, idx) => `
            <span class="em-tag-chip">
                ${escapeHtml(c)}
                <i class="fa-solid fa-xmark remove-comp-tag" data-index="${idx}"></i>
            </span>
        `).join("");

        pane.innerHTML = `
            <div class="em-pane-header">
                <div>
                    <h4>Services, Expertise & Competencies</h4>
                    <p>Customize service offerings and student focus competencies.</p>
                </div>
                <button type="button" class="btn btn-sm btn-primary" id="openAddSrvBtn">
                    <i class="fa-solid fa-plus"></i> Add Service
                </button>
            </div>
            <div id="srvFormContainer" style="display:none; margin-bottom:24px;" class="em-item-card"></div>
            <h5 style="color:#00f0ff; margin-bottom:12px;"><i class="fa-solid fa-cubes"></i> Services List</h5>
            <div class="em-cards-list">
                ${servicesHtml}
            </div>

            <h5 style="color:#00f0ff; margin-bottom:12px; margin-top:24px;"><i class="fa-solid fa-award"></i> Core Competencies Badges</h5>
            <div class="em-tags-cloud">
                ${compBadgesHtml}
            </div>
            <div class="em-add-tag-box" style="margin-top:12px; max-width:400px;">
                <input type="text" class="em-input" id="newCompTagInput" placeholder="Add competency tag...">
                <button type="button" class="btn btn-sm btn-secondary" id="addCompTagBtn"><i class="fa-solid fa-plus"></i> Add</button>
            </div>
        `;

        const formContainer = document.getElementById("srvFormContainer");

        document.getElementById("openAddSrvBtn").onclick = () => {
            editingServiceId = null;
            showServiceForm(formContainer, {});
        };

        pane.querySelectorAll(".edit-srv-btn").forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                editingServiceId = portfolioData.services[idx].id;
                showServiceForm(formContainer, portfolioData.services[idx]);
            };
        });

        pane.querySelectorAll(".delete-srv-btn").forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                if (confirm(`Delete service ${portfolioData.services[idx].title}?`)) {
                    portfolioData.services.splice(idx, 1);
                    savePortfolioData(portfolioData);
                    renderServicesTab();
                }
            };
        });

        // Competency tags
        document.getElementById("addCompTagBtn").onclick = () => {
            const input = document.getElementById("newCompTagInput");
            const val = input.value.trim();
            if (val) {
                portfolioData.competencies.push(val);
                input.value = "";
                savePortfolioData(portfolioData);
                renderServicesTab();
            }
        };

        pane.querySelectorAll(".remove-comp-tag").forEach(btn => {
            btn.onclick = () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                portfolioData.competencies.splice(idx, 1);
                savePortfolioData(portfolioData);
                renderServicesTab();
            };
        });
    }

    function showServiceForm(container, srv) {
        container.style.display = "block";
        container.innerHTML = `
            <form id="saveSrvForm" style="width:100%;">
                <h5 style="color:#00f0ff; margin-bottom:16px;">${srv.id ? 'Edit Service' : 'Add New Service'}</h5>
                <div class="em-form-grid">
                    <div class="em-field-group">
                        <label>Service Title</label>
                        <input type="text" class="em-input" id="srvTitle" required value="${escapeHtml(srv.title || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>FontAwesome Icon</label>
                        <input type="text" class="em-input" id="srvIcon" required value="${escapeHtml(srv.icon || 'fa-solid fa-robot')}">
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Description</label>
                        <textarea class="em-textarea" id="srvDesc" rows="3" required>${escapeHtml(srv.desc || '')}</textarea>
                    </div>
                </div>
                <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:16px;">
                    <button type="button" class="btn btn-sm btn-secondary" id="cancelSrvFormBtn">Cancel</button>
                    <button type="submit" class="btn btn-sm btn-primary"><i class="fa-solid fa-check"></i> Save Service</button>
                </div>
            </form>
        `;

        document.getElementById("cancelSrvFormBtn").onclick = () => {
            container.style.display = "none";
        };

        document.getElementById("saveSrvForm").onsubmit = (e) => {
            e.preventDefault();
            const entry = {
                id: editingServiceId || `srv-${Date.now()}`,
                title: document.getElementById("srvTitle").value.trim(),
                icon: document.getElementById("srvIcon").value.trim(),
                desc: document.getElementById("srvDesc").value.trim()
            };

            if (editingServiceId) {
                const idx = portfolioData.services.findIndex(item => item.id === editingServiceId);
                if (idx !== -1) portfolioData.services[idx] = entry;
            } else {
                portfolioData.services.push(entry);
            }

            savePortfolioData(portfolioData);
            renderServicesTab();
        };
    }

    // Tab 9: Contact & Footer
    function renderContactTab() {
        const pane = document.getElementById("emPane-contact");
        if (!pane) return;

        const c = portfolioData.contact || {};
        const f = portfolioData.footer || {};

        pane.innerHTML = `
            <div class="em-pane-header">
                <div>
                    <h4>Contact Info & Footer Details</h4>
                    <p>Update email, phone, location, socials, and copyright info.</p>
                </div>
            </div>
            <form id="emContactForm">
                <h5 style="color:#00f0ff; margin-bottom:12px;"><i class="fa-solid fa-envelope"></i> Contact Section Info</h5>
                <div class="em-form-grid" style="margin-bottom:20px;">
                    <div class="em-field-group em-form-col-full">
                        <label>Contact Invitation Description</label>
                        <textarea class="em-textarea" id="cntDesc" rows="2">${escapeHtml(c.desc || '')}</textarea>
                    </div>
                    <div class="em-field-group">
                        <label>Email Address</label>
                        <input type="email" class="em-input" id="cntEmail" value="${escapeHtml(c.email || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Phone Number</label>
                        <input type="text" class="em-input" id="cntPhone" value="${escapeHtml(c.phone || '')}">
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Location</label>
                        <input type="text" class="em-input" id="cntLocation" value="${escapeHtml(c.location || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>GitHub Profile Link</label>
                        <input type="text" class="em-input" id="cntGithub" value="${escapeHtml(c.github || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>LinkedIn Profile Link</label>
                        <input type="text" class="em-input" id="cntLinkedin" value="${escapeHtml(c.linkedin || '')}">
                    </div>
                </div>

                <h5 style="color:#00f0ff; margin-bottom:12px;"><i class="fa-solid fa-shoe-prints"></i> Footer</h5>
                <div class="em-form-grid" style="margin-bottom:20px;">
                    <div class="em-field-group em-form-col-full">
                        <label>Footer Tagline</label>
                        <input type="text" class="em-input" id="ftTagline" value="${escapeHtml(f.tagline || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Copyright Text</label>
                        <input type="text" class="em-input" id="ftCopyright" value="${escapeHtml(f.copyright || '')}">
                    </div>
                    <div class="em-field-group">
                        <label>Designer Name</label>
                        <input type="text" class="em-input" id="ftDesigner" value="${escapeHtml(f.designerName || '')}">
                    </div>
                    <div class="em-field-group em-form-col-full">
                        <label>Designer Link</label>
                        <input type="text" class="em-input" id="ftDesignerLink" value="${escapeHtml(f.designerLink || '')}">
                    </div>
                </div>

                <div class="em-footer-save">
                    <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Save Contact & Footer</button>
                </div>
            </form>
        `;

        document.getElementById("emContactForm").onsubmit = (e) => {
            e.preventDefault();
            portfolioData.contact = {
                desc: document.getElementById("cntDesc").value.trim(),
                email: document.getElementById("cntEmail").value.trim(),
                phone: document.getElementById("cntPhone").value.trim(),
                location: document.getElementById("cntLocation").value.trim(),
                github: document.getElementById("cntGithub").value.trim(),
                linkedin: document.getElementById("cntLinkedin").value.trim()
            };
            portfolioData.footer = {
                tagline: document.getElementById("ftTagline").value.trim(),
                copyright: document.getElementById("ftCopyright").value.trim(),
                designerName: document.getElementById("ftDesigner").value.trim(),
                designerLink: document.getElementById("ftDesignerLink").value.trim()
            };
            savePortfolioData(portfolioData);
        };
    }

    // Tab 10: Cloud Database Settings
    function renderDatabaseTab() {
        const pane = document.getElementById("emPane-database");
        if (!pane) return;

        const cfg = getDbConfig();
        const isConfigured = Boolean(cfg.endpoint);

        const statusBanner = isConfigured
            ? `<div class="admin-toast success" style="position:static; margin-bottom:24px; animation:none; width:100%; border-radius:12px;">
                   <i class="fa-solid fa-circle-check" style="font-size:1.4rem;"></i>
                   <div style="flex:1;">
                       <strong>Cloud Database Active (${cfg.provider.toUpperCase()})</strong>
                       <div style="font-size:0.8rem; color:#94a3b8; word-break:break-all; margin-top:2px;">
                           Endpoint: ${escapeHtml(cfg.endpoint)}
                       </div>
                   </div>
               </div>`
            : `<div class="admin-toast" style="position:static; margin-bottom:24px; animation:none; width:100%; border-radius:12px; border-color:rgba(255,255,255,0.15);">
                   <i class="fa-solid fa-hard-drive" style="font-size:1.4rem; color:#94a3b8;"></i>
                   <div style="flex:1;">
                       <strong>Local Browser Storage Mode</strong>
                       <div style="font-size:0.8rem; color:#94a3b8; margin-top:2px;">
                           Edits are currently stored only on this computer. Connect Firebase (free) below so changes update live for visitors when deployed!
                       </div>
                   </div>
               </div>`;

        pane.innerHTML = `
            <div class="em-pane-header">
                <div>
                    <h4>Cloud Database Integration</h4>
                    <p>Store your portfolio changes in a real cloud database so all visitors see updates when deployed.</p>
                </div>
            </div>

            ${statusBanner}

            <form id="emDbConfigForm">
                <div class="em-item-card" style="margin-bottom:24px; flex-direction:column; align-items:flex-start;">
                    <h5 style="color:#00f0ff; margin-bottom:16px;"><i class="fa-solid fa-server"></i> Database Connection Settings</h5>
                    
                    <div class="em-form-grid" style="width:100%;">
                        <div class="em-field-group">
                            <label>Database Provider</label>
                            <select class="em-select" id="dbProviderSelect">
                                <option value="firebase" ${cfg.provider === 'firebase' ? 'selected' : ''}>Google Firebase Realtime Database (Recommended - Free)</option>
                                <option value="supabase" ${cfg.provider === 'supabase' ? 'selected' : ''}>Supabase (PostgreSQL with REST API)</option>
                                <option value="jsonbin" ${cfg.provider === 'jsonbin' ? 'selected' : ''}>JSONBin.io (Instant Cloud Storage)</option>
                                <option value="custom" ${cfg.provider === 'custom' ? 'selected' : ''}>Custom REST API Endpoint</option>
                            </select>
                        </div>

                        <div class="em-field-group">
                            <label>Auto-Sync</label>
                            <div style="display:flex; align-items:center; height:42px;">
                                <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.9rem; text-transform:none; color:#f8fafc;">
                                    <input type="checkbox" id="dbAutoSync" ${cfg.autoSync !== false ? 'checked' : ''} style="width:18px; height:18px;">
                                    <span>Sync changes to cloud automatically on Save</span>
                                </label>
                            </div>
                        </div>

                        <div class="em-field-group em-form-col-full">
                            <label id="dbEndpointLabel">Database Endpoint / URL</label>
                            <input type="text" class="em-input" id="dbEndpointInput" placeholder="https://your-project-default-rtdb.firebaseio.com/portfolio.json" value="${escapeHtml(cfg.endpoint || '')}">
                            <span class="admin-hint" id="dbEndpointHint">Enter your Firebase Realtime Database URL or REST endpoint.</span>
                        </div>

                        <div class="em-field-group em-form-col-full">
                            <label id="dbApiKeyLabel">API Key / Database Secret (Optional)</label>
                            <input type="password" class="em-input" id="dbApiKeyInput" placeholder="Leave blank if database rules permit read/write" value="${escapeHtml(cfg.apiKey || '')}">
                            <span class="admin-hint">Stored securely in your browser's private settings.</span>
                        </div>
                    </div>

                    <div id="dbTestStatusBox" class="admin-error-msg" style="width:100%; margin-top:12px;"></div>

                    <div style="display:flex; gap:10px; margin-top:16px; flex-wrap:wrap; width:100%;">
                        <button type="submit" class="btn btn-sm btn-primary">
                            <i class="fa-solid fa-floppy-disk"></i> Save Database Settings
                        </button>
                        <button type="button" class="btn btn-sm btn-secondary" id="dbTestConnectionBtn">
                            <i class="fa-solid fa-bolt"></i> Test Connection
                        </button>
                        <button type="button" class="btn btn-sm btn-outline" id="dbPushDataBtn">
                            <i class="fa-solid fa-cloud-arrow-up"></i> Upload Current Portfolio to Database
                        </button>
                        <button type="button" class="btn btn-sm btn-outline" id="dbPullDataBtn">
                            <i class="fa-solid fa-cloud-arrow-down"></i> Pull Data from Database
                        </button>
                    </div>
                </div>
            </form>

            <div class="em-item-card" style="flex-direction:column; align-items:flex-start; border-color:rgba(0,240,255,0.25); background:rgba(15,23,42,0.5);">
                <h5 style="color:#00ffd2; margin-bottom:10px;"><i class="fa-solid fa-graduation-cap"></i> Quick 2-Minute Free Firebase Setup Guide</h5>
                <div style="font-size:0.88rem; color:#cbd5e1; line-height:1.6;">
                    <p style="margin-bottom:8px;"><strong>1. Create Free Firebase Project:</strong> Visit <a href="https://console.firebase.google.com" target="_blank" rel="noopener" style="color:#00f0ff; text-decoration:underline;">console.firebase.google.com</a> and click <strong>Add Project</strong> (it's 100% free with your Google account).</p>
                    <p style="margin-bottom:8px;"><strong>2. Create Realtime Database:</strong> On the left sidebar, click <strong>Build -> Realtime Database -> Create Database</strong>. Choose any server region and select <strong>Start in Test Mode</strong> (allows read & write).</p>
                    <p style="margin-bottom:8px;"><strong>3. Copy & Paste URL:</strong> Copy the URL displayed at the top of your database (e.g. <code>https://my-app-default-rtdb.firebaseio.com</code>) and paste it into the <strong>Database Endpoint</strong> field above.</p>
                    <p style="margin-bottom:0;"><strong>4. Upload Current Data:</strong> Click <strong>"Save Database Settings"</strong>, then click <strong>"Upload Current Portfolio to Database"</strong>. You're done! Every time you or anyone visits your deployed website, it automatically loads the latest data!</p>
                </div>
            </div>
        `;

        // Update hints based on provider
        const providerSelect = document.getElementById("dbProviderSelect");
        const endpointLabel = document.getElementById("dbEndpointLabel");
        const endpointInput = document.getElementById("dbEndpointInput");
        const endpointHint = document.getElementById("dbEndpointHint");
        const apiKeyLabel = document.getElementById("dbApiKeyLabel");

        function updateFieldLabels() {
            const prov = providerSelect.value;
            if (prov === "firebase") {
                endpointLabel.textContent = "Firebase Database URL";
                endpointInput.placeholder = "https://your-project-id-default-rtdb.firebaseio.com";
                endpointHint.textContent = "Your Firebase Realtime Database URL (ends with .firebaseio.com)";
                apiKeyLabel.textContent = "Database Secret / Auth (Optional)";
            } else if (prov === "supabase") {
                endpointLabel.textContent = "Supabase Project URL";
                endpointInput.placeholder = "https://your-project-id.supabase.co";
                endpointHint.textContent = "Your Supabase project URL from Settings -> API";
                apiKeyLabel.textContent = "Supabase Anon / Service Key (Required)";
            } else if (prov === "jsonbin") {
                endpointLabel.textContent = "JSONBin.io Bin ID";
                endpointInput.placeholder = "e.g. 64a8b... (or full bin URL)";
                endpointHint.textContent = "Create a bin on jsonbin.io and paste its Bin ID";
                apiKeyLabel.textContent = "JSONBin Master Key (Required)";
            } else {
                endpointLabel.textContent = "REST API Endpoint URL";
                endpointInput.placeholder = "https://api.yourdomain.com/portfolio";
                endpointHint.textContent = "GET / POST JSON endpoint";
                apiKeyLabel.textContent = "Authorization Header / Token (Optional)";
            }
        }

        providerSelect.onchange = updateFieldLabels;
        updateFieldLabels();

        // Save DB form
        document.getElementById("emDbConfigForm").onsubmit = (e) => {
            e.preventDefault();
            const newCfg = {
                provider: providerSelect.value,
                endpoint: endpointInput.value.trim(),
                apiKey: document.getElementById("dbApiKeyInput").value.trim(),
                autoSync: document.getElementById("dbAutoSync").checked
            };
            setDbConfig(newCfg);
            showToast("Database configuration saved successfully!", "success");
            renderDatabaseTab();
        };

        // Test connection
        document.getElementById("dbTestConnectionBtn").onclick = async () => {
            const statusBox = document.getElementById("dbTestStatusBox");
            statusBox.style.display = "block";
            statusBox.className = "admin-error-msg";
            statusBox.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Testing connection to cloud database...';

            const testCfg = {
                provider: providerSelect.value,
                endpoint: endpointInput.value.trim(),
                apiKey: document.getElementById("dbApiKeyInput").value.trim()
            };

            if (!testCfg.endpoint) {
                statusBox.textContent = "Please enter a database endpoint URL first.";
                return;
            }

            try {
                const startTime = performance.now();
                const savedCfg = getDbConfig();
                setDbConfig(testCfg);
                await fetchCloudDatabase();
                setDbConfig(savedCfg);
                const elapsed = Math.round(performance.now() - startTime);

                statusBox.style.background = "rgba(0, 255, 210, 0.1)";
                statusBox.style.borderColor = "#00ffd2";
                statusBox.style.color = "#00ffd2";
                statusBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> Connection successful! Response received in ${elapsed}ms.`;
            } catch (err) {
                statusBox.style.background = "rgba(248, 113, 113, 0.1)";
                statusBox.style.borderColor = "#f87171";
                statusBox.style.color = "#f87171";
                statusBox.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Connection failed: ${escapeHtml(err.message)}`;
            }
        };

        // Push current data
        document.getElementById("dbPushDataBtn").onclick = async () => {
            const cfg = getDbConfig();
            if (!cfg.endpoint) {
                showToast("Please save your database endpoint first.", "error");
                return;
            }
            try {
                showToast("Uploading portfolio entities to cloud database...", "info");
                await saveToCloudDatabase(portfolioData);
                showToast("Portfolio successfully uploaded to cloud database!", "success");
                renderDatabaseTab();
            } catch (err) {
                showToast(`Upload failed: ${err.message}`, "error");
            }
        };

        // Pull data
        document.getElementById("dbPullDataBtn").onclick = async () => {
            const cfg = getDbConfig();
            if (!cfg.endpoint) {
                showToast("Please configure your database endpoint first.", "error");
                return;
            }
            try {
                showToast("Fetching data from cloud database...", "info");
                const cloudData = await fetchCloudDatabase();
                if (cloudData && typeof cloudData === "object") {
                    portfolioData = deepMerge(DEFAULT_PORTFOLIO_DATA, cloudData);
                    localStorage.setItem("portfolio_custom_data", JSON.stringify(portfolioData));
                    applyPortfolioDataToDOM(portfolioData);
                    showToast("Downloaded and applied latest cloud data!", "success");
                    renderEntityManagerTabs();
                } else {
                    showToast("Cloud database is currently empty. Use 'Upload Current Portfolio' first.", "info");
                }
            } catch (err) {
                showToast(`Pull failed: ${err.message}`, "error");
            }
        };
    }

    // Tab 11: Security & Admin Settings
    function renderSecurityTab() {
        const pane = document.getElementById("emPane-security");
        if (!pane) return;

        pane.innerHTML = `
            <div class="em-pane-header">
                <div>
                    <h4>Admin Security & Data Control</h4>
                    <p>Change your admin password, backup your portfolio, or restore defaults.</p>
                </div>
            </div>
            
            <div class="em-item-card" style="margin-bottom:24px; flex-direction:column; align-items:flex-start;">
                <h5 style="color:#00f0ff; margin-bottom:12px;"><i class="fa-solid fa-key"></i> Change Admin Password</h5>
                <form id="changePasswordForm" style="width:100%;">
                    <div class="em-form-grid">
                        <div class="em-field-group">
                            <label>Current Password</label>
                            <input type="password" class="em-input" id="currPwdInput" required>
                        </div>
                        <div class="em-field-group">
                            <label>New Password</label>
                            <input type="password" class="em-input" id="newPwdInput" required minlength="4">
                        </div>
                    </div>
                    <div id="pwdErrorMsg" class="admin-error-msg"></div>
                    <div style="margin-top:12px;">
                        <button type="submit" class="btn btn-sm btn-primary"><i class="fa-solid fa-lock"></i> Update Password</button>
                    </div>
                </form>
            </div>

            <div class="em-item-card" style="margin-bottom:24px; flex-direction:column; align-items:flex-start; border-color:rgba(0,255,210,0.3); background:rgba(0,255,210,0.04);">
                <h5 style="color:#00ffd2; margin-bottom:8px;"><i class="fa-solid fa-rocket"></i> Deploy to the World (Permanent Updates)</h5>
                <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:12px;">
                    When deployed to GitHub Pages or Netlify, your browser edits must be saved into your static <code>index.html</code> so all visitors (recruiters & clients) see them.
                </p>
                <div style="font-size:0.82rem; color:#cbd5e1; margin-bottom:16px; background:rgba(15,23,42,0.6); padding:10px 14px; border-radius:8px; border:1px solid rgba(255,255,255,0.08); width:100%;">
                    <strong>How to make your updates visible to everyone:</strong><br>
                    1. Click <strong>"Download Updated index.html"</strong> below.<br>
                    2. Replace the <code>index.html</code> file in your local project folder.<br>
                    3. Run <code>git add .</code>, <code>git commit -m "Update portfolio"</code>, and <code>git push</code>.<br>
                    ✨ Everyone visiting your website will see your latest projects, bio, and changes!
                </div>
                <button type="button" class="btn btn-sm btn-primary" id="emExportHtmlBtn">
                    <i class="fa-solid fa-cloud-arrow-down"></i> Download Updated index.html for Deployment
                </button>
            </div>

            <div class="em-item-card" style="margin-bottom:24px; flex-direction:column; align-items:flex-start;">
                <h5 style="color:#00f0ff; margin-bottom:8px;"><i class="fa-solid fa-file-export"></i> Backup & Migration</h5>
                <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:16px;">Export all portfolio entities as a JSON file or import a previous backup.</p>
                <div style="display:flex; gap:12px; flex-wrap:wrap;">
                    <button type="button" class="btn btn-sm btn-secondary" id="emExportDataBtn">
                        <i class="fa-solid fa-download"></i> Export Data (JSON)
                    </button>
                    <label class="btn btn-sm btn-outline" style="cursor:pointer;">
                        <i class="fa-solid fa-upload"></i> Import Data (JSON)
                        <input type="file" id="emImportFileInput" accept=".json" style="display:none;">
                    </label>
                </div>
            </div>

            <div class="em-item-card" style="border-color:rgba(248,113,113,0.3); background:rgba(248,113,113,0.05); flex-direction:column; align-items:flex-start;">
                <h5 style="color:#f87171; margin-bottom:8px;"><i class="fa-solid fa-triangle-exclamation"></i> Danger Zone</h5>
                <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:16px;">Reset all customized portfolio entities back to the original hardcoded state.</p>
                <button type="button" class="btn btn-sm" id="emResetDefaultsBtn" style="background:#f87171; color:#020617; font-weight:600;">
                    <i class="fa-solid fa-rotate-left"></i> Reset All Entities to Defaults
                </button>
            </div>
        `;

        // Change password form
        document.getElementById("changePasswordForm").onsubmit = (e) => {
            e.preventDefault();
            const curr = document.getElementById("currPwdInput").value;
            const next = document.getElementById("newPwdInput").value;
            const errBox = document.getElementById("pwdErrorMsg");

            if (curr !== getAdminPassword()) {
                errBox.textContent = "Current password is incorrect.";
                errBox.classList.add("visible");
                return;
            }

            errBox.classList.remove("visible");
            setAdminPassword(next);
            document.getElementById("changePasswordForm").reset();
            showToast("Admin password changed successfully!", "success");
        };

        // Export updated deployable HTML
        const emExportHtmlBtn = document.getElementById("emExportHtmlBtn");
        if (emExportHtmlBtn) {
            emExportHtmlBtn.onclick = () => {
                exportUpdatedHTML();
            };
        }

        // Export data
        document.getElementById("emExportDataBtn").onclick = () => {
            exportPortfolioJSON();
        };

        // Import data
        document.getElementById("emImportFileInput").onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                importPortfolioJSON(file);
            }
        };

        // Reset defaults
        document.getElementById("emResetDefaultsBtn").onclick = () => {
            if (confirm("Are you sure you want to reset ALL entities back to default portfolio data? This action cannot be undone.")) {
                resetToDefaults();
            }
        };
    }

    function exportUpdatedHTML() {
        // Clone current live document
        const docClone = document.documentElement.cloneNode(true);

        // Remove transient admin classes and contenteditable from clone
        docClone.classList.remove("admin-inline-active");
        const body = docClone.querySelector("body");
        if (body) {
            body.classList.remove("admin-inline-active");
            body.removeAttribute("style");
        }

        docClone.querySelectorAll("[contenteditable]").forEach(el => {
            el.removeAttribute("contenteditable");
            el.removeAttribute("spellcheck");
        });

        // Ensure modals are closed in static export
        docClone.querySelectorAll(".admin-modal").forEach(m => {
            m.classList.remove("open");
        });

        // Ensure admin toolbar & indicators are inactive in static export
        const toolbar = docClone.querySelector("#adminToolbar");
        if (toolbar) toolbar.classList.remove("active");

        const indicator = docClone.querySelector("#inlineEditIndicator");
        if (indicator) indicator.classList.remove("active");

        const toastCont = docClone.querySelector("#adminToastContainer");
        if (toastCont) toastCont.remove();

        const fullHtml = "<!DOCTYPE html>\n" + docClone.outerHTML;
        const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "index.html";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast("Downloaded updated index.html! Replace in your project & deploy.", "success");
    }

    function exportPortfolioJSON() {
        const jsonStr = JSON.stringify(portfolioData, null, 2);
        const blob = new Blob([jsonStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `portfolio-entities-backup-${new Date().toISOString().slice(0,10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast("Portfolio backup downloaded!", "success");
    }

    function importPortfolioJSON(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const parsed = JSON.parse(e.target.result);
                if (parsed && typeof parsed === "object") {
                    portfolioData = deepMerge(DEFAULT_PORTFOLIO_DATA, parsed);
                    savePortfolioData(portfolioData);
                    renderEntityManagerTabs();
                    showToast("Portfolio data imported successfully!", "success");
                } else {
                    throw new Error("Invalid file structure");
                }
            } catch (err) {
                showToast("Failed to import: invalid JSON file.", "error");
            }
        };
        reader.readAsText(file);
    }

    function resetToDefaults() {
        localStorage.removeItem("portfolio_custom_data");
        portfolioData = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
        applyPortfolioDataToDOM(portfolioData);
        renderEntityManagerTabs();
        showToast("Portfolio reset to original state!", "info");
    }

    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // --------------------------------------------------------------------------
    // 7. Login / Logout & FAB Button Controllers
    // --------------------------------------------------------------------------
    function openLoginModal() {
        const modal = document.getElementById("adminLoginModal");
        const pwdInput = document.getElementById("adminPasswordInput");
        const errBox = document.getElementById("adminLoginError");
        if (modal) {
            if (errBox) errBox.classList.remove("visible");
            if (pwdInput) pwdInput.value = "";
            modal.classList.add("open");
            if (pwdInput) setTimeout(() => pwdInput.focus(), 150);
            document.body.style.overflow = "hidden";
        }
    }

    function closeLoginModal() {
        const modal = document.getElementById("adminLoginModal");
        if (modal) {
            modal.classList.remove("open");
            document.body.style.overflow = "";
        }
    }

    function updateAdminUI() {
        const isLoggedIn = isAdminLoggedIn();
        const fab = document.getElementById("adminFabBtn");
        const fabIcon = document.getElementById("adminFabIcon");
        const fabTooltip = document.querySelector(".admin-fab-tooltip");
        const toolbar = document.getElementById("adminToolbar");

        if (isLoggedIn) {
            if (fab) fab.classList.add("logged-in");
            if (fabIcon) fabIcon.className = "fa-solid fa-sliders";
            if (fabTooltip) fabTooltip.textContent = "Admin Active (Click to Manage)";
            if (toolbar) toolbar.classList.add("active");
        } else {
            if (fab) fab.classList.remove("logged-in");
            if (fabIcon) fabIcon.className = "fa-solid fa-lock";
            if (fabTooltip) fabTooltip.textContent = "Admin Portal (Login)";
            if (toolbar) toolbar.classList.remove("active");
            if (isInlineEditActive) toggleInlineEditMode();
        }
    }

    function handleLogin(enteredPassword) {
        const actual = getAdminPassword();
        const errBox = document.getElementById("adminLoginError");

        if (enteredPassword === actual) {
            setAdminLoggedIn(true);
            closeLoginModal();
            updateAdminUI();
            showToast("Welcome Admin! Access unlocked.", "success");
            // Automatically open entity manager on first login for convenience
            setTimeout(() => {
                openEntityManager();
            }, 300);
        } else {
            if (errBox) {
                errBox.textContent = "Incorrect security password. Please try again.";
                errBox.classList.add("visible");
            }
        }
    }

    function handleLogout() {
        setAdminLoggedIn(false);
        updateAdminUI();
        closeEntityManager();
        showToast("Logged out of Admin Portal", "info");
    }

    // --------------------------------------------------------------------------
    // 8. Initialization & Event Listeners
    // --------------------------------------------------------------------------
    document.addEventListener("DOMContentLoaded", async () => {
        // Load configuration from .env if available
        await loadEnvConfig();

        // Apply saved portfolio custom data immediately (0ms instant render)
        applyPortfolioDataToDOM(portfolioData);

        // Update Admin UI state based on session
        updateAdminUI();

        // Background check: sync from cloud database if configured
        syncFromCloudIfAvailable();

        // FAB Click
        const fabBtn = document.getElementById("adminFabBtn");
        if (fabBtn) {
            fabBtn.addEventListener("click", () => {
                if (isAdminLoggedIn()) {
                    openEntityManager();
                } else {
                    openLoginModal();
                }
            });
        }

        // Login Modal Close
        const loginClose = document.getElementById("adminLoginCloseBtn");
        const loginBackdrop = document.querySelector("#adminLoginModal .admin-modal-backdrop");
        if (loginClose) loginClose.addEventListener("click", closeLoginModal);
        if (loginBackdrop) loginBackdrop.addEventListener("click", closeLoginModal);

        // Login Form
        const loginForm = document.getElementById("adminLoginForm");
        if (loginForm) {
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const pwd = document.getElementById("adminPasswordInput").value;
                handleLogin(pwd);
            });
        }

        // Password Reveal Toggle
        const togglePwdBtn = document.getElementById("togglePwdBtn");
        if (togglePwdBtn) {
            togglePwdBtn.addEventListener("click", () => {
                const input = document.getElementById("adminPasswordInput");
                const icon = togglePwdBtn.querySelector("i");
                if (input.type === "password") {
                    input.type = "text";
                    icon.className = "fa-solid fa-eye-slash";
                } else {
                    input.type = "password";
                    icon.className = "fa-solid fa-eye";
                }
            });
        }

        // Toolbar Buttons
        const editModeBtn = document.getElementById("adminEditModeBtn");
        if (editModeBtn) editModeBtn.addEventListener("click", toggleInlineEditMode);

        const openManagerBtn = document.getElementById("adminOpenManagerBtn");
        if (openManagerBtn) openManagerBtn.addEventListener("click", openEntityManager);

        const saveInlineBtn = document.getElementById("adminSaveInlineBtn");
        if (saveInlineBtn) saveInlineBtn.addEventListener("click", scrapeDOMToData);

        const exportHtmlBtn = document.getElementById("adminExportHtmlBtn");
        if (exportHtmlBtn) exportHtmlBtn.addEventListener("click", exportUpdatedHTML);

        const exportBtn = document.getElementById("adminExportBtn");
        if (exportBtn) exportBtn.addEventListener("click", exportPortfolioJSON);

        const importBtn = document.getElementById("adminImportBtn");
        const importFileInput = document.getElementById("adminImportFileInput");
        if (importBtn && importFileInput) {
            importBtn.addEventListener("click", () => importFileInput.click());
            importFileInput.addEventListener("change", (e) => {
                if (e.target.files[0]) importPortfolioJSON(e.target.files[0]);
            });
        }

        const resetBtn = document.getElementById("adminResetBtn");
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                if (confirm("Reset ALL portfolio entities back to default?")) {
                    resetToDefaults();
                }
            });
        }

        const logoutBtn = document.getElementById("adminLogoutBtn");
        if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);

        // Entity Manager Close
        const emCloseBtn = document.getElementById("emCloseBtn");
        const emBackdrop = document.querySelector("#adminEntityManagerModal .admin-modal-backdrop");
        if (emCloseBtn) emCloseBtn.addEventListener("click", closeEntityManager);
        if (emBackdrop) emBackdrop.addEventListener("click", closeEntityManager);

        // Entity Manager Tab Switchers
        document.querySelectorAll(".em-tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const tabKey = btn.getAttribute("data-tab");
                switchEmTab(tabKey);
            });
        });

        // Ensure right-click works smoothly for clipboard/editing when logged in
        window.addEventListener("contextmenu", (e) => {
            if (isInlineEditActive || isAdminLoggedIn()) {
                e.stopPropagation();
            }
        }, true);

        // Escape key to close open admin modals
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeLoginModal();
                closeEntityManager();
            }
        });
    });

})();
