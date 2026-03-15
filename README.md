
 ## 🏗️ Architecture & Deployment

This project goes beyond just frontend development; it is designed with a complete system architecture mindset. The application is hosted and tested on a local bare-metal environment to simulate real-world production scenarios.

* **Server:** Ubuntu 22.04 LTS running on Hyper-V.
* **Networking:** Custom static IP configuration using `Netplan` to ensure stable SSH access and consistent internal routing.
* **CI/CD (Upcoming):** Automated bash scripts (`deploy.sh`) for seamless pulling, building, and serving the latest application state.


