export const projects = [
    {
      image: 'lightning.png',
      title: "Lightning",
      description: "This project is a Minimum Viable Product (MVP) implementation developed for ISO New England in a team of 10 operating under the Agile Scrum framework. The project comprises a dashboard that summarizes time series data in a visually appealing way using charts and graphs and an interactive GUI that facilitates comparison and modeling of time series electric grid data.",
      buttons: [
        {
          'name': 'Code',
          'link': 'https://github.com/manantalwar/Lightning',
        },
      ],
      skills: ['JavaScript', 'ReactJS', 'NodeJS', 'MongoDB', 'MERN', 'REST API', 'HighCharts', 'Prisma', 'Figma', 'Agile'],
    },
    {
      image: "lrc.png",
      title: "UMass LRC Shift and Payroll Management System",
      description: "This project serves as the internal shift and payroll management system for the Learning Resource Center, serving 500+ employees of the department every day. As the critical backbone of the department’s functioning, it provides ability to modify and update shifts, dynamically create an up-to-date roster and schedule among others.",
      buttons: [
        {
          'name': 'Code',
          'link': 'https://github.com/manantalwar/database',
        },
        {
          'name': 'Live',
          'link': 'https://lrcstaff.umass.edu/'
        }
      ],
      skills: ['Python', 'Django', 'MySQL', 'Agile', 'AWS', 'Docker']
    },
    {
      image: "appdanger.png",
      title: "AppDanger: Aggregating Dangerous Apps using Online Reviews",
      description: "This python package provides support for preprocessing, training and serializing NLP text classification models on app reviews data from the Apple and Google Play stores using RoBERTa. With our partner, the UMass Rescue Lab, we conceptualized a tool for assisting parents in protecting their children from technology-driven exploitation.",
      buttons: [
        {
          'name': 'Poster',
          'link': 'https://ds.cs.umass.edu/sites/default/files/appdanger.pdf',
        },
        {
          'name': 'Affiliation',
          'link': 'https://ds.cs.umass.edu/manan-talwar'
        },
        {
            'name': 'Sponsor',
            'link': 'https://www.rescue-lab.org/our-mission'
        }
      ],
      skills: ['Python', 'SpaCy', 'PostgreSQL', 'AWS', 'S3', 'Agile']
    },
    {
      image: 'sawhyp.png',
      title: "SAwHyp: Sleep-Awake hypernetworks for continual learning",
      description: 'In this paper, we propose a biologically inspired framework for continual learning of temporally structured data via sleep consolidation and replay mechanisms as observed in the mammalian brain. Our hypernetwork architecture comprises of a Multi-Layer Perceptron and a ResNet-32 target network with a Variational Autoencoder to implement generative replay.',
      buttons: [
          {
              'name': 'Code',
              'link': '',
          },
          {
              'name': 'Paper',
              'link': 'https://drive.google.com/file/d/1doTy2JNFRIDQtP14QMeb5hletKY6nbdi/view?usp=share_link',
          }, 
          {
            'name': 'Poster',
            'link': 'https://drive.google.com/file/d/1sI20lPI9UFV9VrEkVyZ0ev8iNsrZy5e3/view?usp=share_link',
          }
      ],
      skills: ['Python', 'PyTorch', 'Jupyter', 'LaTeX'],
  },
  {
    image: "mrits.png",
    title: "Mixed Reality-Intelligent Tutoring System for Anatomy Education",
    description: "Anatomy education in medical and health professional programs faces challenges due to traditional teaching methods, declining resources, and limited hands-on experience. This paper proposes a framework for a Mixed Reality Intelligent Tutoring System (MR-ITS) based on the Microsoft HoloLens device, which combines mixed-reality interaction with AI-powered guidance and assessment.",
    buttons: [
      {
        'name': 'Proof of Concept',
        'link': 'https://drive.google.com/file/d/11Y-K2dyqHoB0ZPtV8TphV-NSlu50t3cu/view?usp=share_link',
      },
    ],
    skills: ['Apache Solr', 'GPT', 'HoloAnatomy', 'Microsoft Hololens']
  },
  {
    image: "ours.png",
    title: "UMass OURS Website Redevelopment Project",
    description: "This project comprised of inception and implementation of a website that serves as a repository for research resources across 90+ academic departments at UMass Amherst. Funded by the Office of the Provost, the project mitigates the long-standing problem of lack of a central location for research exploration at UMass Amherst directly impacting 20,000+ matriculated undergraduate students.",
    buttons: [
      {
        'name': 'Live',
        'link': 'https://www.umass.edu/ours/',
      },
    ],
    skills: ['PHP', 'Drupal 9', 'HTML', 'CSS', 'SQL', 'Agile']
  },
    {
        image: 'snaml.png',
        title: "SnaMl: State-of-the-art ML for Social Network Analysis",
        description: 'In this paper, we present an analysis of state-of-the-art machine learning methods that have been developed recently to identify their applications in large scale Social Network Analysis. Our experiments show that we can use the low dimensional vectors and features generated by Machine Learning-based Social Network graphs to predict behaviors of individuals as well as communities. ',
        buttons: [
            {
                'name': 'Code',
                'link': 'https://github.com/manantalwar/SNAML',
            },
            {
                'name': 'Paper',
                'link': 'https://drive.google.com/file/d/1_dJmo03WNqiZ6FLFWrcey4B1GFNQSY-C/view?usp=share_link',
            },
        ],
        skills: ['Python', 'PyTorch', 'Jupyter', 'LaTeX'],
    },
    {
      image: 'ckd.png',
      title: "CKD Safe: Indicator for Chronic Kidney Disease",
      description: 'The aim of this study is to quantify a patient’s kidney disease risk based on a combination of physiological factors. These include, but are not limited to, heavy metal presence in blood and urine, albumin-to-creatinine ratio (ACR), glomerular filtration rate (GFR), blood sugar levels, and prior history of cardiovascular disease as input variables. We used the CDC NHANES dataset 1999 onwards for our study.',
      buttons: [
          {
              'name': 'Code',
              'link': 'https://github.com/manantalwar/Indicator-for-CKD',
          },
          {
              'name': 'Paper',
              'link': 'https://drive.google.com/file/d/1Ax7aQLEf2hHWF6n40BjIO2uTQ9C_PiXL/view?usp=share_link',
          },
      ],
      skills: ['Python', 'Jupyter', 'LaTeX'],
  },
    {
      image: 'escape.png',
      title: "The Great Escape",
      description: 'The game consists of an egyptian themed arena. Clues are provided sometimes explicitly and sometimes more subtly. Clues are revealed on interactions with certain game objects and are sequential. Each of the clues guide the player to the exit. There is an AI-based enemy NPC in the arena which attacks the player and decrease the health of the character gradually.',
      buttons: [
          {
              'name': 'Code',
              'link': 'https://github.com/manantalwar/TheGreatEscape',
          },
      ],
      skills: ['Unity', 'C#'],
    },
  ];

  


  