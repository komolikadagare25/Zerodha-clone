const categories = [
    {
        id: 1,
        title: "Account Opening",
        icon: "bi-plus-circle",
        links: [
            "Online Account Opening",
            "Offline Account Opening",
            "Required Documents",
        ],
    },
    {
        id: 2,
        title: "Your Zerodha Account",
        icon: "bi-person-circle",
        links: [
            "Your Profile",
            "Account modification",
            "Client Master Report (CMR) and Depository Participant (DP)",
            "Nomination",
            "Transfer and conversion of securities",
        ],
    },
    {
        id: 3,
        title: "Kite",
        icon: "bi-pie-chart",
        links: [
            "Orders",
            "Charts",
            "Holdings",
            "Positions",
        ],
    },
    {
        id: 4,
        title: "Funds",
        icon: "bi-currency-rupee",
        links: [
            "Add Funds",
            "Withdraw Funds",
            "Fund Statement",
        ],
    },
    {
        id: 5,
        title: "Console",
        icon: "bi-speedometer2",
        links: [
            "Portfolio",
            "Reports",
            "Tax P&L",
        ],
    },
];


const announcements = [
    "Latest Intraday leverages and Square-off timings",
    "Rights Entitlements listing in June 2026",
];

const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual",
    "Learn how to create a ticket",
];


function CreateTicket() {
    return (
        <div className="container row pt-3">
            <div className="col-1"></div>
            <div className="col-7">
                <div className="accordion zerodhaAccordion" id="supportAccordion">

                    {categories.map((item, index) => (

                        <div className="accordion-item mb-4" key={item.id}>

                            <h2 className="accordion-header">

                                <button
                                    className={`accordion-button ${index === 1 ? "" : "collapsed"
                                        }`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${item.id}`}
                                >

                                    <div className="iconBox">
                                        <i className={`bi ${item.icon}`}></i>
                                    </div>

                                    <span className="title">
                                        {item.title}
                                    </span>

                                </button>

                            </h2>

                            <div
                                id={`collapse${item.id}`}
                                className={`accordion-collapse collapse ${index === 1 ? "show" : ""
                                    }`}
                                data-bs-parent="#supportAccordion"
                            >

                                <div className="accordion-body">

                                    <ul>

                                        {item.links.map((link, i) => (

                                            <li key={i}>
                                                <a href="/">
                                                    {link}
                                                </a>
                                            </li>

                                        ))}

                                    </ul>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>
            </div>
            <div className="col-1"></div>
            <div className="col-3">
                <div className="announcement-box">

                    <ul>
                        {announcements.map((item, index) => (
                            <li key={index}>
                                <a href="/">{item}</a>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Quick Links */}

                <div className="quick-links mt-4">

                    <div className="quick-links-header">
                        Quick links
                    </div>

                    <div className="list-group list-group-flush">

                        {quickLinks.map((item, index) => (

                            <a
                                href="/"
                                key={index}
                                className="list-group-item"
                            >
                                {index + 1}. {item}
                            </a>

                        ))}

                    </div>

                </div>
            </div>
             <div className="col-1"></div>
        </div>
    );
}

export default CreateTicket;