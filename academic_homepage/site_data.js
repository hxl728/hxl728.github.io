window.SITE_DATA = {
  "name": "Xianliang Huang",
  "nameCN": "黄贤良",
  "title": "World Model & 3D Vision Researcher | Ph.D., Fudan University",
  "affiliation": "World Model Algorithm Researcher, ByteDance · Ph.D. in Computer Science, Fudan University",
  "location": "Shanghai, China",
  "email": "huangxl21@m.fudan.edu.cn",
  "headshot": "assets/hxl-image.png",
  "cvUrl": "files/Huang_Xianliang_Academic_CV_Repositioned_EN.pdf",
  "scholarUrl": "https://scholar.google.com/citations?user=o39MFWsAAAAJ&hl=zh-CN",
  "homepageUrl": "https://github.com/hxl728",
  "oneLine": "I build physics-grounded 3D world models for reconstructing, restoring, and predicting dynamic physical scenes from multi-view visual data.",
  "targetFit": "My background connects mathematical modeling, physical inverse problems, neural rendering, 3D reconstruction, and production-scale world model engineering. I am seeking postdoctoral research at GPI on world models for physical intelligence: scene-centric models that perceive the real world, reason over geometry and dynamics, and support robust embodied action.",
  "keywords": [
    "Physical Intelligence",
    "World Models",
    "3D Vision",
    "Neural Rendering",
    "Gaussian Splatting",
    "NeRF",
    "Multi-view Reconstruction",
    "Dynamic Scene Understanding",
    "Physical Inverse Problems",
    "Embodied Perception"
  ],
  "links": [
    {
      "label": "Google Scholar",
      "url": "https://scholar.google.com/citations?user=o39MFWsAAAAJ&hl=zh-CN"
    },
    {
      "label": "GitHub",
      "url": "https://github.com/hxl728"
    },
    {
      "label": "CV",
      "url": "files/Huang_Xianliang_Academic_CV_Repositioned_EN.pdf"
    },
    {
      "label": "Current Chinese CV",
      "url": "files/Huang_Xianliang_CV_Current_CN.pdf"
    }
  ],
  "bio": [
    "I am a World Model Algorithm Researcher at ByteDance and received my Ph.D. from the School of Computer Science, Fudan University, advised by Prof. Shuigeng Zhou. My doctoral research focused on multi-view image generation, restoration, and reconstruction, especially neural rendering and 3D scene completion under imperfect observations.",
    "My training path is deliberately cross-disciplinary. I studied mathematics as an undergraduate, wireless physics and AI as a master's student, and then computer graphics and 3D reconstruction during my Ph.D. This path gives me a rare combination of mathematical abstraction, physical modeling, and modern data-driven 3D representation learning.",
    "My recent work develops robust 3D representations under occlusion, distractors, masked regions, distortion, and large-scale scene variation. At ByteDance, I work on large-scale fisheye reconstruction, feed-forward 3D Gaussian Splatting, cross-device mapping and localization, long-sequence offline and incremental reconstruction, and 3DGS/4DGS scene generation and reconstruction. These experiences motivate my postdoctoral agenda: predictive 3D/4D world models for physical intelligence."
  ],
  "researchVision": "My long-term goal is to build scene-centric world models that integrate geometry, appearance, semantics, uncertainty, and dynamics. Such models should not only reconstruct what has been observed, but also infer hidden structure, restore corrupted observations, predict future physical evolution, and provide actionable state representations for embodied agents.",
  "researchThemes": [
    {
      "title": "3D/4D World Models for Physical Prediction",
      "description": "Learning dynamic scene representations that forecast geometry, appearance, semantics, and object-level changes from multi-view videos, fisheye cameras, and robot observations.",
      "methods": [
        "3DGS / 4DGS",
        "Neural fields",
        "Generative priors",
        "Long-sequence reconstruction",
        "Dynamics prediction"
      ]
    },
    {
      "title": "Robust Embodied Perception under Imperfect Sensing",
      "description": "Building perception systems that remain reliable with distractors, occlusion, missing pixels, camera distortion, moving objects, and cross-device sensing shifts.",
      "methods": [
        "Distractor removal",
        "Masked restoration",
        "Fisheye reconstruction",
        "Multi-view consistency",
        "Open-world scene cleanup"
      ]
    },
    {
      "title": "From Physical Inverse Problems to Neural Reconstruction",
      "description": "Connecting physics-based inverse modeling with modern neural representations so that reconstruction models respect physical structure rather than fitting only pixels.",
      "methods": [
        "Electromagnetic inversion",
        "Layered media",
        "Anisotropic 3D objects",
        "Optimization",
        "Learning-assisted inverse solvers"
      ]
    },
    {
      "title": "Scalable Systems, Benchmarks, and Deployment",
      "description": "Developing research infrastructure that moves beyond small curated scenes toward large-scale, production-grade data, evaluation, and engineering pipelines.",
      "methods": [
        "Benchmarks",
        "Dataset construction",
        "Efficient coordinate encoding",
        "Production engineering",
        "Model evaluation"
      ]
    }
  ],
  "news": [
    {
      "date": "2026",
      "text": "NeRF-MIR accepted/published in IEEE Transactions on Neural Networks and Learning Systems."
    },
    {
      "date": "2026",
      "text": "Semantic-guided progressive object removal with Gaussian Splatting accepted to ICRA 2026."
    },
    {
      "date": "2025",
      "text": "A Focused Human Body Model for Accurate Anthropometric Measurements Extraction accepted to CVPR 2025."
    },
    {
      "date": "2025",
      "text": "Joined ByteDance as a World Model Algorithm Researcher."
    },
    {
      "date": "2023",
      "text": "IDDR-NGP accepted to ACM Multimedia as an oral paper."
    }
  ],
  "publications": [
    {
      "title": "IDDR-NGP: Incorporating Detectors for Distractor Removal with Instant Neural Radiance Field",
      "authors": "Xianliang Huang, Jiajie Gou, Shuhang Chen, Zhizhou Zhong, Jihong Guan, Shuigeng Zhou",
      "venue": "ACM Multimedia, 2023 · Oral",
      "note": "First-author selected publication",
      "abstract": "A unified neural rendering framework for removing diverse dynamic distractors from 3D scenes by integrating 2D detectors with Instant-NGP and multi-view compensation.",
      "tags": [
        "NeRF",
        "3D Scene Restoration",
        "Robust Perception"
      ],
      "links": [
        {
          "label": "Paper",
          "url": "https://dl.acm.org/doi/10.1145/3581783.3612045"
        },
        {
          "label": "arXiv",
          "url": "https://arxiv.org/abs/2601.11030"
        },
        {
          "label": "Code",
          "url": "https://github.com/NeRF-Factory/IDDR-NGP"
        }
      ]
    },
    {
      "title": "A Focused Human Body Model for Accurate Anthropometric Measurements Extraction",
      "authors": "Shuhang Chen*, Xianliang Huang*, Zhizhou Zhong, Juhong Guan, Shuigeng Zhou",
      "venue": "CVPR, 2025",
      "note": "Co-first-author selected publication",
      "abstract": "A focused human body model and multimodal benchmark for extracting accurate anthropometric measurements from reconstructed human geometry.",
      "tags": [
        "Human Body Model",
        "Benchmark",
        "Embodied Perception"
      ],
      "links": [
        {
          "label": "CVF",
          "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Chen_A_Focused_Human_Body_Model_for_Accurate_Anthropometric_Measurements_Extraction_CVPR_2025_paper.html"
        }
      ]
    },
    {
      "title": "NeRF-MIR: Towards High-Quality Restoration of Masked Images with Neural Radiance Fields",
      "authors": "Xianliang Huang, Zhizhou Zhong, Shuhang Chen, Yi Xu, Juhong Guan, Shuigeng Zhou",
      "venue": "IEEE Transactions on Neural Networks and Learning Systems, 2026",
      "note": "First-author journal publication",
      "abstract": "A NeRF-based masked image restoration framework that introduces patch-based entropy ray emission and progressively iterative restoration to improve texture recovery across views.",
      "tags": [
        "NeRF",
        "Image Restoration",
        "Multi-view Learning"
      ],
      "links": [
        {
          "label": "arXiv",
          "url": "https://arxiv.org/abs/2601.17350"
        }
      ]
    },
    {
      "title": "Hybrid Electromagnetic Inversion of 3-D Irregular Scatterers Embedded in Layered Media by VBIM and MET",
      "authors": "Xianliang Huang, Jiawen Li, Yanjin Chen, Feng Han, Qinghuo Liu",
      "venue": "IEEE Transactions on Antennas and Propagation, 2020",
      "note": "First-author physics / inverse-problem publication",
      "abstract": "A hybrid electromagnetic inversion method for irregular 3D scatterers in layered media, reflecting my foundation in physics-grounded inverse modeling before moving into neural 3D reconstruction.",
      "tags": [
        "Physical Inverse Problems",
        "Electromagnetics",
        "Optimization"
      ],
      "links": [
        {
          "label": "DOI",
          "url": "https://doi.org/10.1109/TAP.2020.2985156"
        }
      ]
    },
    {
      "title": "Semantic-Guided Progressive Object Removal with Gaussian Splatting",
      "authors": "Xianliang Huang, Chen Xiao, Yuanxiang Ni, Guanming Liu, Mingkai Liu, Dikai Fan, Xiao Liu, Hao Zhang",
      "venue": "ICRA, 2026 · Accepted",
      "note": "First-author robotics-oriented selected publication",
      "abstract": "A Gaussian Splatting based 3D object removal framework that connects semantic guidance, progressive scene editing, and robotics-relevant scene representation.",
      "tags": [
        "3DGS",
        "Scene Editing",
        "Robotics"
      ],
      "links": []
    }
  ],
  "projects": [
    {
      "title": "World Models and Large-Scale 3D Reconstruction at ByteDance",
      "subtitle": "Industrial-scale research on scene-centric perception and predictive 3D representation.",
      "description": "Research topics include large-scale fisheye reconstruction, feed-forward 3DGS, cross-device mapping and localization, long-sequence offline and incremental reconstruction, and 3DGS/4DGS scene generation and reconstruction.",
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/hxl728"
        }
      ]
    },
    {
      "title": "Robust Neural Rendering for Corrupted Multi-view Scenes",
      "subtitle": "IDDR-NGP, NeRF-MIR, Hi-NeRF, and Gaussian Splatting based scene inpainting.",
      "description": "A research line on reconstructing clean, consistent 3D scenes from observations corrupted by distractors, masks, occlusions, and incomplete views.",
      "links": [
        {
          "label": "IDDR-NGP Code",
          "url": "https://github.com/NeRF-Factory/IDDR-NGP"
        }
      ]
    },
    {
      "title": "Human Geometry and Measurement Intelligence",
      "subtitle": "Focused human body model and multimodal anthropometric benchmark.",
      "description": "A CVPR 2025 project on accurate human body measurement extraction, combining 3D human representation, benchmark construction, and application-driven evaluation.",
      "links": [
        {
          "label": "CVF Paper",
          "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Chen_A_Focused_Human_Body_Model_for_Accurate_Anthropometric_Measurements_Extraction_CVPR_2025_paper.html"
        }
      ]
    },
    {
      "title": "Physics-Grounded Inverse Problems",
      "subtitle": "Electromagnetic inversion of irregular 3D objects in layered media.",
      "description": "Earlier work on physical inverse modeling, layered media, anisotropic object reconstruction, and learning-assisted segmentation, forming the physics foundation for my current work on physical world modeling.",
      "links": [
        {
          "label": "DOI",
          "url": "https://doi.org/10.1109/TAP.2020.2985156"
        }
      ]
    }
  ],
  "education": [
    {
      "period": "2021.09-2025.06",
      "role": "Ph.D. in Electronic Information / Computer Science",
      "place": "Fudan University",
      "detail": "Advisor: Prof. Shuigeng Zhou. Dissertation direction: multi-view image generation, restoration, and reconstruction."
    },
    {
      "period": "2018.09-2021.06",
      "role": "M.S. in Wireless Physics",
      "place": "Xiamen University",
      "detail": "Advisor: Prof. Qinghuo Liu. Research on electromagnetic inversion and AI-assisted physical modeling."
    },
    {
      "period": "2014.09-2018.06",
      "role": "B.S. in Mathematics and Applied Mathematics",
      "place": "Nanchang University",
      "detail": "Foundation in mathematical modeling, optimization, and computation."
    }
  ],
  "experience": [
    {
      "period": "2025.07-Present",
      "role": "World Model Algorithm Researcher",
      "place": "ByteDance",
      "detail": "Large-scale fisheye reconstruction; feed-forward 3DGS mapping/localization; long-sequence reconstruction; 3DGS/4DGS scene generation and reconstruction."
    },
    {
      "period": "2025.03-2025.06",
      "role": "Large Model Algorithm Research Intern",
      "place": "CASCO Signal Ltd.",
      "detail": "AI algorithms for rail-transit scenarios; technical reports; RAG optimization for diagnostic large models."
    },
    {
      "period": "2024.03-2024.09",
      "role": "Algorithm Intern",
      "place": "Hikvision",
      "detail": "Open dataset parsing; EVA-CLIP deployment; detector training/fine-tuning; data augmentation, data quality improvement, and label semantic graph construction."
    },
    {
      "period": "2021.06-2021.09",
      "role": "Algorithm Researcher",
      "place": "Beijing Shenshang Technology",
      "detail": "3D digital human technology for virtual anchor generation; GAN-based and classical face reconstruction pipelines for 3D face reconstruction and multi-view face synthesis."
    }
  ],
  "teaching": [
    {
      "period": "Available upon request",
      "course": "Teaching and mentoring statement",
      "role": "Optional application material",
      "detail": "For the GPI postdoctoral application, the teaching statement is optional; a research-oriented mentoring statement can be prepared if requested."
    }
  ],
  "honors": [
    "Outstanding Graduate, Fudan University",
    "Outstanding Student, Fudan University",
    "First-Class Doctoral Scholarship, Fudan University",
    "Outstanding Student, Xiamen University",
    "Outstanding Student Leader, School of Electronic Science and Technology, Xiamen University",
    "Provincial First Prize, National Undergraduate Mathematics Competition",
    "Provincial Second Prize, National Undergraduate Mathematics Competition",
    "Second Prize, APMCM Asia-Pacific Mathematical Modeling Contest"
  ],
  "service": [
    "Application positioning: physics-grounded 3D world models for general physical intelligence.",
    "Selected research outputs span ACM MM, CVPR, TNNLS, IEEE TAP, ICME, ACCV, and ICRA-related 3D reconstruction / robotics work."
  ],
  "contact": {
    "heading": "Interested in physical intelligence, world models, or 3D reconstruction?",
    "text": "I welcome discussions on postdoctoral research, 3D/4D world models, robust neural rendering, and scene-centric perception for embodied agents."
  }
};
