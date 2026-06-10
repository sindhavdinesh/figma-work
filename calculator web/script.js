document.addEventListener("DOMContentLoaded", () => {

    
    const tennisItems = document.querySelectorAll(".tennis-list-item");
    const tennisGraphic = document.querySelector(".tennis-grid-graphic");

    
    const tennisMockData = {
        0: { background: "#1c1c1c", html: "<div class='mock-mesh'>[ Calendar Grid Syncing View ]</div>" },
        1: { background: "#1a2332", html: "<div class='mock-mesh'>[ Availability Hours Slots Matrix ]</div>" },
        2: { background: "#2d1a32", html: "<div class='mock-mesh'>[ Personalized Booking Link Generation View ]</div>" },
        3: { background: "#1a3223", html: "<div class='mock-mesh'>[ Automated Dual Confirmed Slots View ]</div>" }
    };

    tennisItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            
            tennisItems.forEach(el => el.classList.remove("item-selected"));
            
        
            item.classList.add("item-selected");

            
            if (tennisMockData[index] && tennisGraphic) {
                tennisGraphic.style.backgroundColor = tennisMockData[index].background;
                tennisGraphic.innerHTML = tennisMockData[index].html;
            }
        });
    });


    
    const businessTabs = document.querySelectorAll(".business-tab-btn");
    const tabHeadingText = document.querySelector(".business-card-right-desc h3");
    const tabParagraphText = document.querySelector(".business-card-right-desc p");
    const leftStackContainer = document.querySelector(".business-card-left-stack");

    const businessDataMatrix = {
        0: {
            title: "Telemedicine",
            desc: "Build Telemedicine to allow patients to book appointments with doctors and therapists.",
            cards: [
                { name: "Julian Erics, MD", role: "Licensed therapist with 10 years of experience." },
                { name: "Lawrence Hunter, MD", role: "Cardiologists from California focussing on fitness." }
            ]
        },
        1: {
            title: "Recruiting & HR Pipelines",
            desc: "Coordinate instant interview slots between global structural candidates and panel teams automatically.",
            cards: [
                { name: "Sarah Jenkins", role: "Head of Talent Acquisition at Acme Corp." },
                { name: "David Miller", role: "Senior Engineering Recruitment Partner." }
            ]
        },
        2: {
            title: "Education & Consulting Labs",
            desc: "Enable easy recurring student support hours, office consultations, and virtual classroom setups safely.",
            cards: [
                { name: "Prof. Alan Turing", role: "Department Head of Advanced Computing Systems." },
                { name: "Dr. Grace Hopper", role: "Lead Research Mentor & Project Supervisor." }
            ]
        },
        3: {
            title: "Expert Advisories & Networks",
            desc: "Authorize paid profile scheduling portals that accept dynamic billing variables prior to confirmation.",
            cards: [
                { name: "Naval Ravikant", role: "Angel Investor & Private Strategy Adviser." },
                { name: "Balaji Srinivasan", role: "Tech Founder & Operational Consultant." }
            ]
        }
    };

    businessTabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            
            businessTabs.forEach(t => t.classList.remove("tab-active"));
            tab.classList.add("tab-active");

            const activeDataset = businessDataMatrix[index];
            if (activeDataset) {
                
                tabHeadingText.textContent = activeDataset.title;
                tabParagraphText.textContent = activeDataset.desc;

                
                if (leftStackContainer) {
                    leftStackContainer.innerHTML = ""; 
                    activeDataset.cards.forEach(cardData => {
                        const cardNode = document.createElement("div");
                        cardNode.className = "practitioner-mini-card";
                        cardNode.innerHTML = `
                            <div class="avatar-round-node"></div>
                            <div>
                                <h4>${cardData.name}</h4>
                                <p>${cardData.role}</p>
                            </div>
                        `;
                        leftStackContainer.appendChild(cardNode);
                    });
                }
            }
        });
    });


    
    const showMoreTweetsBtn = document.querySelector(".tw-show-more-btn");
    const tweetsLayoutGrid = document.querySelector(".tweets-masonry-grid");

    if (showMoreTweetsBtn && tweetsLayoutGrid) {
        showMoreTweetsBtn.addEventListener("click", () => {
            
            const supplementaryTweets = [
                { author: "Peer Richelsen", handle: "@peer_rich", content: "Open source scaling is winning everywhere. Proud of the baseline infrastructure core setup! 🚀" },
                { author: "Lee Robinson", handle: "@leerob", content: "The developer ergonomics of customized scheduling workflows built on basic configurations are absolutely unparalleled." },
                { author: "Alex V.", handle: "@alexv", content: "Our enterprise stack integration shifted over entirely to the custom portal within hours. Clean code." }
            ];

            supplementaryTweets.forEach(data => {
                const tweetNode = document.createElement("div");
                tweetNode.className = "tweet-box-card";
                tweetNode.innerHTML = `
                    <strong>${data.author}</strong> <span class="tw-handle">${data.handle}</span>
                    <p>${data.content}</p>
                `;
                tweetsLayoutGrid.appendChild(tweetNode);
            });

           
            showMoreTweetsBtn.style.display = "none";
        });
    }

});