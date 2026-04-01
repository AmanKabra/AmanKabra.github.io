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
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-resources",
          title: "Resources",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
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
        },{id: "nav-ph-d",
          title: "Ph.D.",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/phd/";
          },
        },{id: "nav-work-with-me",
          title: "Work With Me",
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
          section: "News",},{id: "teachings-entrepreneurial-mindset-mgmt-215",
          title: 'Entrepreneurial Mindset (MGMT 215)',
          description: "A 3-credit undergraduate course on entrepreneurial reasoning, customer discovery, and problem-based learning.",
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
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%61%6E.%6B%61%62%72%61@%70%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/amankabra", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TCkJa04AAAAJ", "_blank");
        },
      },];
