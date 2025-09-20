export const portfolioData = {
  personal: {
    name: "Arpit Singh",
    title: "Tech Enthusiast & ML Developer",
    description: "Passionate and curious tech enthusiast with a strong interest in machine learning, data science, and artificial intelligence. Eager to apply theoretical knowledge to real-world problems through hands-on projects and internships. Always looking to learn and grow in dynamic, team-oriented environments.",
    email: "arpitthakurazamgarh@gmail.com",
    phone: "6387309660",
    location: "Noida, India",
    github: "https://github.com/ArpitSingh18-hub"
  },
  
  education: [
    {
      id: 1,
      institution: "IEC College Of Engineering and Technology",
      degree: "Bachelor Of Technology CSE",
      grade: "7.88 CGPA",
      duration: "2023 - 2027",
      type: "college"
    },
    {
      id: 2,
      institution: "St. Xavier's High School",
      degree: "Intermediate",
      grade: "75.2%",
      duration: "2021 - 2022",
      type: "school"
    },
    {
      id: 3,
      institution: "St. Xavier's High School",
      degree: "High School",
      grade: "86.3%",
      duration: "2019 - 2020",
      type: "school"
    }
  ],
  
  skills: {
    languages: ["C", "C++", "Python", "Java"],
    libraries: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Sklearn", "TensorFlow", "PyTorch"],
    gui: ["Turtle", "Tkinter", "Streamlit"],
    ide: ["VS Code", "PyCharm", "Jupyter Notebook", "Kaggle", "Colab"]
  },
  
  projects: [
    {
      id: 1,
      title: "Diabetic Retinopathy Detection",
      description: "Medical image analysis system using deep learning CNNs to automatically detect and classify diabetic retinopathy severity from retinal fundus images. Implemented preprocessing techniques like CLAHE and utilized transfer learning with ResNet architecture.",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Transfer Learning", "Medical Imaging"],
      category: "Deep Learning",
      featured: true
    },
    {
      id: 2,
      title: "Gender Detection Using Hand Image",
      description: "Computer vision project using CNNs to classify gender from hand images. Implemented MediaPipe for hand detection, applied guided filtering for preprocessing, and achieved high accuracy using ResNet-based architecture.",
      technologies: ["Python", "CNN", "MediaPipe", "OpenCV", "Deep Learning", "Computer Vision"],
      category: "Computer Vision",
      featured: true
    },
    {
      id: 3,
      title: "Plant Disease Detection with EfficientNet B4",
      description: "Agricultural AI system using EfficientNet B4 architecture to identify and classify plant diseases from leaf images. Trained on Plant Village dataset with 39+ disease classes across multiple crops achieving 95%+ accuracy.",
      technologies: ["Python", "EfficientNet B4", "TensorFlow", "Computer Vision", "Agriculture AI"],
      category: "Deep Learning",
      featured: true
    },
    {
      id: 4,
      title: "Virat Kohli Run Prediction System",
      description: "Cricket analytics system using machine learning to predict runs scored by Virat Kohli based on match context, opposition, venue, and historical performance. Implemented XGBoost for superior prediction accuracy.",
      technologies: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Sports Analytics", "Data Science"],
      category: "Machine Learning",
      featured: true
    },
    {
      id: 5,
      title: "IPL Win Prediction",
      description: "Collected and cleaned historical IPL datasets from Kaggle and other sources. Performed exploratory data analysis (EDA) to identify significant trends and features. Built and evaluated predictive models using Python (Pandas, Scikit-learn, Matplotlib, Seaborn). Visualized key insights and model predictions with dashboards and charts.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "EDA"],
      category: "Data Science",
      featured: false
    },
    {
      id: 6,
      title: "Movie Recommender System",
      description: "Collected and prepared movie ratings and metadata from MovieLens dataset. Implemented content-based filtering using TF-IDF and cosine similarity based on genres, cast, and keywords. Developed collaborative filtering using user-item interaction matrices and matrix factorization techniques. Built a simple UI using Streamlit.",
      technologies: ["Python", "TF-IDF", "Streamlit", "Pandas", "Scikit-learn", "Recommendation Systems"],
      category: "Machine Learning",
      featured: false
    },
    {
      id: 7,
      title: "Snake Game",
      description: "Designed game components (Snake, Food, Scoreboard) as separate classes to enhance code reusability and structure. Used Tkinter to build the graphical interface and handle keyboard events. Implemented game logic for snake movement, growth on food consumption, and collision detection. Applied object-oriented design patterns.",
      technologies: ["Python", "Tkinter", "OOP", "Game Development", "GUI"],
      category: "Software Development",
      featured: false
    }
  ],
  
  certificates: [
    {
      id: 1,
      title: "TCS iON Certification",
      issuer: "TCS",
      category: "Technology"
    },
    {
      id: 2,
      title: "Robotics Design Using Arduino",
      issuer: "Technical Institute",
      category: "Robotics"
    },
    {
      id: 3,
      title: "Microsoft Office and Personality Development Program",
      issuer: "Microsoft",
      category: "Professional Development"
    },
    {
      id: 4,
      title: "Advance Excel and Power BI",
      issuer: "Business Analytics Institute",
      category: "Data Analytics"
    }
  ]
};