const e_partProjects = document.getElementById("partProjects");
const e_showMoreProjects = document.getElementById("showMoreProjects");
const e_rotateText = document.getElementById("rotateText");

function setParticles(e, t) {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: e
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .5,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 5,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: t,
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1,
                    mode: "repulse"
                },
                onclick: {
                    enable: !1,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    })
}
e_showMoreProjects.addEventListener("click", () => {
    if ("Show More" === e_showMoreProjects.innerText) {
        let e = e_partProjects.querySelectorAll("[data-hidden]");
        for (const t of e) t.classList.toggle("display-none");
        e_showMoreProjects.innerText = "Show Less"
    } else {
        let e = e_partProjects.querySelectorAll("[data-hidden]");
        for (const t of e) t.classList.toggle("display-none");
        e_showMoreProjects.innerText = "Show More"
    }
}), setParticles("#ffffff", "#ffffff");
const quotes = [
    ["In programming, every challenge is a chance to grow, and every mistake is an opportunity to learn.", "John Carmack"],
    ["The best part of software development is that there's always something new to learn, with every line of code pushing the boundaries of your knowledge.", "Linus Torvalds"],
    ["In programming, the hard part isn’t solving problems, but deciding what problems to solve.", "Paul Graham"],
    ["The function of good software is to make the complex appear simple.", "Grady Booch"]
];

function randomQuote() {
    var e = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-content").innerText = e[0], document.getElementById("quote-author").innerText = "~ " + e[1]
}
document.getElementById("quote-content").addEventListener("click", randomQuote), randomQuote();
const container = ".tagcloud",
    texts = ["JAVA","Spring Boot","J2EE","Spring(MVC)","MySQL","HTML","CSS" ,"Bootstrap","JavaScript" ,"JQuery","Git","Aws","Eclipse"],
    options = {
        radius: outerWidth > 975 ? 250 : 160,
        maxSpeed: "normal"
    };
TagCloud(container, texts, options);
class TextRotate {
    constructor(e, t, o) {
        this.toRotate = t, this.element = e, this.loopNum = 0, this.period = parseInt(o, 10) || 2e3, this.text = "", this.tick(), this.isDeleting = !1
    }
    tick() {
        let e = this.loopNum % this.toRotate.length,
            t = this.toRotate[e];
        this.text = this.isDeleting ? t.substring(0, this.text.length - 1) : t.substring(0, this.text.length + 1), this.element.innerHTML = `<span class="wrap">${this.text}</span>`;
        let o = 100 - 100 * Math.random();
        this.isDeleting && (o /= 2), this.isDeleting || this.text !== t ? this.isDeleting && "" === this.text && (this.isDeleting = !1, this.loopNum++, o = 500) : (o = this.period, this.isDeleting = !0);
        let i = this;
        setTimeout(function() {
            i.tick()
        }, o)
    }
}
window.addEventListener("load", () => {
    let e = JSON.parse(e_rotateText.dataset.rotate),
        t = e_rotateText.dataset.period;
    e && new TextRotate(e_rotateText, e, t);
    let o = document.createElement("style");
    o.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }", document.body.appendChild(o)
});