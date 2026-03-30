// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Refereed publications, works under review, and practice-oriented writing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses taught at the Smeal College of Business, Pennsylvania State University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae of Aman Kabra.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-joined-a-2-2m-u-s-army-research-institute-grant-on-task-interdependence-in-multiteam-systems-as-the-doctoral-student-lead-at-penn-state-pi-hollenbeck-humphrey-lepine",
          title: 'Joined a $2.2M U.S. Army Research Institute grant on task interdependence in multiteam...',
          description: "",
          section: "News",},{id: "news-received-the-ossian-r-mackenzie-teaching-award-from-penn-state-awarded-annually-to-one-doctoral-student-across-all-departments-in-the-smeal-college-of-business-for-teaching-performance",
          title: 'Received the Ossian R. MacKenzie Teaching Award from Penn State, awarded annually to...',
          description: "",
          section: "News",},{id: "news-presented-a-symposium-on-architecting-empirical-frontiers-national-infrastructure-to-investigate-multiteam-systems-at-the-84th-annual-meeting-of-the-academy-of-management-in-chicago",
          title: 'Presented a symposium on Architecting Empirical Frontiers: National Infrastructure to Investigate Multiteam Systems...',
          description: "",
          section: "News",},{id: "news-our-paper-why-and-how-organizational-structures-change-has-been-published-in-the-academy-of-management-annals-with-m-m-luciano-m-k-watson-and-c-c-winchester",
          title: 'Our paper “Why and How Organizational Structures Change” has been published in the...',
          description: "",
          section: "News",},{id: "news-i-will-be-joining-the-department-of-management-at-the-spears-school-of-business-oklahoma-state-university-as-a-tenure-track-assistant-professor-in-organizational-behavior-effective-july-2026",
          title: 'I will be joining the Department of Management at the Spears School of...',
          description: "",
          section: "News",},{id: "teachings-entrepreneurial-mindset",
          title: 'Entrepreneurial Mindset',
          description: "This undergraduate course develops students&#39; ability to think entrepreneurially, identify opportunities, and apply creative problem-solving in business contexts.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/entrepreneurial-mindset/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Kabra_CV.pdf", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/amankabra", "_blank");
        },
      },];
