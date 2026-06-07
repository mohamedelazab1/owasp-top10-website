# 🛡️ OWASP Top 10 — Real-World Web Security

An open-source educational website that teaches the **OWASP Top 10: 2021** web application vulnerabilities through real-world scenarios, actual CVEs, bug bounty case studies, and step-by-step attack walkthroughs.

> **Mission:** Make web security education accessible, practical, and grounded in real incidents — not just toy examples.

## ✨ What's Inside

- **10 vulnerability pages** with real-world incidents, vulnerable code, attack walkthroughs, and secure fixes
- **Difficulty ranking** — every vulnerability is tagged Easy, Medium, Hard, or Expert
- **Front-end vs. Back-end** perspective for each issue
- **40+ real CVEs & bug bounty cases** referenced
- **Step-by-step attack walkthroughs** with realistic payloads and HTTP traces
- **Side-by-side vulnerable and secure code** in real frameworks (Express, Flask, Django, Spring, React, PHP, Python, Java)
- **Modern, responsive design** with dark mode

## 📑 Table of Contents

| # | Vulnerability | Difficulty | Real Incident |
|---|---|---|---|
| [A01](pages/a01-broken-access-control.html) | Broken Access Control (IDOR, PrivEsc) | 🟢 Easy | Facebook CVE-2019-13615 |
| [A02](pages/a02-cryptographic-failures.html) | Cryptographic Failures | 🟢 Easy | Equifax 2017 ($1.4B) |
| [A03](pages/a03-injection.html) | Injection (SQLi, XSS, Cmd, NoSQL, SSTI) | 🟢 Easy | TalkTalk 2015 |
| [A04](pages/a04-insecure-design.html) | Insecure Design | 🟡 Medium | Parler 2021 |
| [A05](pages/a05-security-misconfiguration.html) | Security Misconfiguration | 🟢 Easy | Capital One 2019 |
| [A06](pages/a06-vulnerable-components.html) | Vulnerable &amp; Outdated Components | 🟡 Medium | Log4Shell 2021 |
| [A07](pages/a07-auth-failures.html) | Identification &amp; Auth Failures | 🟡 Medium | Microsoft Storm-0558 |
| [A08](pages/a08-integrity-failures.html) | Software &amp; Data Integrity Failures | 🔴 Hard | SolarWinds 2020 |
| [A09](pages/a09-logging-monitoring.html) | Logging &amp; Monitoring Failures | 🔴 Hard | Target 2013 |
| [A10](pages/a10-ssrf.html) | Server-Side Request Forgery (SSRF) | 🟣 Expert | Capital One 2019 |

## 🚀 Quick Start

This is a pure static site — no build step, no dependencies. Just open it.

```bash
# Clone the repo
git clone https://github.com/mohamedelazab1/owasp-top10-website.git
cd owasp-top10-website

# Open in your browser
open index.html   # macOS
# or
xdg-open index.html   # Linux
# or
start index.html   # Windows
```

### Or serve it locally

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .

# Then visit http://localhost:8000
```

## 📁 Project Structure

```
owasp-top10-website/
├── index.html                  # Landing page with all 10 vulnerabilities
├── css/
│   └── style.css               # Modern dark theme
├── js/
│   └── main.js                 # Mobile menu, filters, scroll spy
├── pages/
│   ├── a01-broken-access-control.html
│   ├── a02-cryptographic-failures.html
│   ├── a03-injection.html
│   ├── a04-insecure-design.html
│   ├── a05-security-misconfiguration.html
│   ├── a06-vulnerable-components.html
│   ├── a07-auth-failures.html
│   ├── a08-integrity-failures.html
│   ├── a09-logging-monitoring.html
│   └── a10-ssrf.html
├── README.md
├── LICENSE
└── .gitignore
```

## 🎓 Learning Path

**If you're a complete beginner**, follow this order:

1. Start with **A01 — Broken Access Control**. It's the most common and easiest to understand.
2. Move to **A02 — Cryptographic Failures** to learn about hashing, TLS, and key management.
3. Then **A03 — Injection** (the biggest category) to learn about SQLi and XSS.
4. **A05 — Security Misconfiguration** to learn the most common ops mistakes.
5. **A07 — Auth Failures** to round out your authentication knowledge.
6. **A04 — Insecure Design** to start thinking about threats at the architecture level.
7. **A06 — Vulnerable Components** to learn supply chain security.
8. **A08 — Integrity Failures** to understand deserialization and CI/CD.
9. **A09 — Logging Failures** to understand detection &amp; response.
10. **A10 — SSRF** — the most advanced. Requires cloud and network knowledge.

## 🔧 Practice Resources

- [PortSwigger Web Security Academy](https://portswigger.net/web-security) — free labs for every category
- [TryHackMe](https://tryhackme.com/) — guided, gamified learning
- [HackTheBox](https://www.hackthebox.com/) — real-world-style challenges
- [OWASP WebGoat](https://owasp.org/www-project-webgoat/) — deliberately vulnerable Java app
- [DVWA](https://github.com/digininja/DVWA) — PHP/MySQL vulnerable app
- [Juice Shop](https://github.com/juice-shop/juice-shop) — modern vulnerable Node.js app

## 🤝 Contributing

Contributions are welcome! Open an issue or pull request for:

- New real-world incident examples
- Additional vulnerable/secure code samples
- Translations
- Bug fixes and typo corrections
- Better visual design

## ⚠️ Ethical Use

This site is for **education and defensive security only**. All scenarios are based on **publicly disclosed incidents, CVEs, and bug bounty reports**. Never test these techniques against systems you don't own or have explicit written permission to test. Unauthorized access is illegal under laws like the CFAA (US), Computer Misuse Act (UK), and equivalents worldwide.

## 📜 License

Released under the [MIT License](LICENSE). Free to use, modify, and distribute with attribution.

## 🙏 Acknowledgments

- [OWASP](https://owasp.org) for maintaining the Top 10 and the broader community
- [PortSwigger](https://portswigger.net) for the Web Security Academy
- The bug bounty community on [HackerOne](https://hackerone.com) and [Bugcrowd](https://bugcrowd.com)
- Every security researcher whose work made this educational content possible

---

Made with ❤️ for the security community.
