import {
  mobile,
  backend,
  creator,
  web,
  corona,
  vray,
  blender,
  threedmax,
  unrealeng,
  marvelous,
  zbrush,
  photoshop,
  substance,
  illustrator,
  sketchup,
  unity,
  hello,
  workme,
  response,
  loveyou,
  coreldraw,
  cottage,
  interior,
  kitchen,
  client1,
  client2,
  client3,
  livingroom,
  cottageindetails,
  modularHouse,
  interiorForDesigner,
  moduleMovieTheater,
  inartdesign,
  cabinonalake,
  cottagebyrefference,
  chairmodeling,
  sofaModeling,
  upworkIcon,
  behanceIcon,
  linkedinIcon,
  kworkIcon,
} from '../assets';

const herotext = {
  hitext: "Hi! I'm ",
  nametext: 'Nataly!',
  learnMore: 'Learn more',
  myintro: [
    'I develop 3D visualizations, models ',
    'and scenes for your enterprises, ',
    'endeavors and dreams.',
  ],
  about: ['Worked with many clients', 'and picked up many skills along the way'],
  socials: ['By the way, here are my contacts, ', 'Upwork is also there, I answer quickly :)'],
  portfolio: ['Led multiple projects to success over the years.', 'Curious about some?', 'Visit my portfolio'],
  reviews: ['Find out what my clients think!', 'Testimonials'],
  experience: ['A little (or a lot) useful about my work...'],
  readytowork: ['Now I’m ready to discuss your task', 'and get to work...', 'Contact me']
};

const navLinks = [
  {
    about: 'About',
  },
  {
    work: 'Portfolio',
  },
  {
    contact: 'Contact',
  },
];

const intro = {
  introheader1: ' Introduction',
  introheader2: 'Overview',
  introtext:
    'I`m a skilled 3D developer with experience in 3ds max, Blender,Unreal Engine and other dev systems. I am a quick learner and collaborate closely with clients to create high-quality visualizations,that meet profound professional standards and solve real-world tasks.Let`s work together to bring your dreams and ideas to life.',
};

const services = [
  {
    title: 'Exterior 3D Visualization',
    icon: web,
  },
  {
    title: 'Interior 3D Visualization',
    icon: mobile,
  },
  {
    title: '3D Modelling',
    icon: backend,
  },
  {
    title: 'Game Development',
    icon: creator,
  },
];

const technologiesHeader = {
  mySkills: 'My Skills...'
}

const technologies = [
  {
    name: '3Ds max',
    icon: threedmax,
    anotation:
      'Autodesk 3ds Max, formerly 3D Studio and 3D Studio Max, is a professional 3D computer graphics program for making 3D animations, models, games and images. It is developed and produced by Autodesk Media and Entertainment.',
  },
  {
    name: 'Corona render',
    icon: corona,
    anotation:
      'Chaos Corona is a computer-generated imagery 3D rendering software developed by Chaos Czech, a subsidiary of Chaos. It was created by Ondrej Karlík as a student project in 2009 and was developed by a Prague-based company Render Legion under the name Corona Renderer. In 2017, Chaos Group acquired Render Legion, later rebranding the company to Chaos Czech. In 2022, Corona Renderer was rebranded to Chaos Corona.',
  },
  {
    name: 'VRay render',
    icon: vray,
    anotation:
      'V-Ray is a biased computer-generated imagery rendering software application developed by Bulgarian software company Chaos . V-Ray is a commercial plug-in for third-party 3D computer graphics software applications and is used for visualizations and computer graphics in industries such as media, entertainment, film and video game production, industrial design, product design and architecture.',
  },
  {
    name: 'Blender',
    icon: blender,
    anotation:
      'Blender, sometimes stylized as blender, is a free and open-source 3D computer graphics software tool set used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games. Blenders features include 3D modelling, UV mapping, texturing, digital drawing, raster graphics editing, rigging and skinning, fluid and smoke simulation, particle simulation, soft body simulation, sculpting, animation, match moving, rendering, motion graphics, video editing, and compositing.',
  },
  {
    name: 'Unreal Engine',
    icon: unrealeng,
    anotation:
      'Unreal Engine (UE) is a series of 3D computer graphics game engines developed by Epic Games, first showcased in the 1998 first-person shooter video game Unreal. Initially developed for PC first-person shooters, it has since been used in a variety of genres of games and has seen adoption by other industries, most notably the film and television industry. Unreal Engine is written in C++   and features a high degree of portability, supporting a wide range of desktop, mobile, console, and virtual reality platforms.',
  },
  {
    name: 'Marvelous Designer',
    icon: marvelous,
    anotation:
      'The industry standard for creating virtual clothing assets for the Game, VFX, Design and Architecture industries.',
  },
  {
    name: 'ZBrush',
    icon: zbrush,
    anotation:
      'Pixologic ZBrush is a digital sculpting tool that combines 3D/2.5D modeling, texturing and painting. It uses a proprietary "pixol" technology which stores lighting, color, material, orientation and depth information for the points making up all objects on the screen. The main difference between ZBrush and more traditional modeling packages is that it is more akin to traditional sculpting.',
  },
  {
    name: 'Substance Painter',
    icon: substance,
    anotation:
      'Substance 3D Painter is a 3D painting software that allows users to texture and add materials directly to 3D meshes in real-time.',
  },
  {
    name: 'Adobe Photoshop',
    icon: photoshop,
    anotation:
      'Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1987 by Thomas and John Knoll. Since then, the software has become the most used tool for professional digital art, especially in raster graphics editing. The software`s name is often colloquially used as a verb (e.g. "to photoshop an image", "photoshopping", and "photoshop contest") although Adobe discourages such use.',
  },
  {
    name: 'Adobe Illustrator',
    icon: illustrator,
    anotation:
      'Development of Adobe Illustrator for the Apple Macintosh began in 1985 (shipping in January 1987) as a commercialization of Adobe`s in-house font development software and PostScript file format. Adobe Illustrator is the companion product of Adobe Photoshop. Photoshop is primarily geared toward digital photo manipulation and photorealistic styles of computer illustration, while Illustrator provides results in the typesetting and logo graphic areas of design.',
  },
  {
    name: 'Corel Draw',
    icon: coreldraw,
    anotation:
      'CorelDRAW is a vector graphics editor developed and marketed by Alludo (formerly Corel Corporation). It is also the name of the Corel graphics suite, which includes the bitmap-image editor Corel Photo-Paint as well as other graphics-related programs (see below). It can serve as a digital painting platform, desktop publishing suite, and is commonly used for production art in signmaking, vinyl and laser cutting and engraving, print-on-demand and other industry processes. Reduced-feature Standard and Essentials versions are also offered.',
  },
  {
    name: 'SketchUp',
    icon: sketchup,
    anotation:
      'SketchUp is a suite of subscription products that include SketchUp Pro Desktop, a 3D modeling Computer-Aided Design (CAD) program for a broad range of drawing and design applications — including architectural, interior design, industrial and product design, landscape architecture, civil and mechanical engineering, theater, film and video game development.',
  },
  {
    name: 'Unity',
    icon: unity,
    anotation:
      'Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Worldwide Developers Conference as a Mac OS X game engine. The engine has since been gradually extended to support a variety of desktop, mobile, console and virtual reality platforms. It is particularly popular for iOS and Android mobile game development, is considered easy to use for beginner developers, and is popular for indie game development.',
  },
];

const experience_header = ['KEYPOINTS OF OUR FUTURE COOPERATION', 'Mastery and Result', 'Support me!']

const experiences = [
  {
    title: 'Contact me',
    action_name: 'Use contact form ',
    icon: hello,
    iconBg: '#E6DEDD',
    date: 'Step - №1',
    points: [
      'Make your request, describe your task, what are your deadlines and budget demands.',
      'Please make sure you have examples of similar work: photo of a similar interior, models alike, buildings or others.',
      'If you need my consult only, feel free to ask for it.',
      'You can follow me on social media and contact me in messengers also.',
    ],
  },
  {
    title: 'My response',
    action_name: 'Get my consult or/and terms of reference ',
    icon: response,
    iconBg: '#E6DEDD',
    date: 'Step - №2',
    points: [
      'I will answer as soon as possible. Get my estimates of the project, consultation on its budget and deadlines.',
      'With my full support we will draw up the proper technical task.',
      'We will discuss nuances of the project, its specifics, you will get better understanding of the work flow.',
      'If you already have terms of reference of your own - send it to me, it will speed up the process.',
    ],
  },
  {
    title: 'Start our work',
    action_name: 'Coordination and result.',
    icon: workme,
    iconBg: '#E6DEDD',
    date: 'Step - №3',
    points: [
      'I am up to very wide spectrum of projects. Due to my professional connections I can quickly establish a team for almost any task.',
      'Collaborating with cross-functional teams including designers, programmers, and other professionals to create high-quality result.',
      'We always implement original design and take into account cultural and international diversity.',
      'Solve technical issues and advising on all aspects of a work, providing constructive feedbacks to you and your team.',
    ],
  },
  {
    title: 'Subscribe',
    action_name: 'Get benefits and addons',
    icon: loveyou,
    iconBg: '#E6DEDD',
    date: 'Step - №4',
    points: [
      'Follow me on Boosty.to. You can get free additional renders and priority on your orders. Source files, support and consultations on an ongoing basis.',
      'I provide considerable discounts for my subscribers on Virtual excursions, models and other addons to projects',
      'Free upgrades of finished works.',
      'Press the link and get all of benefits with your first order.',
    ],
  },
];

const testimonials_text = {
  what_others_say: 'What others say?',
  testiomnials_text: 'Testimonials...',
  testimonials_promt: "I've worked with all sorts of clients, leveling up my skills and teaming up with smart people. Here's some feedback..."
};

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make an interior as beautiful as I imagined it, but Nataly proved me wrong.',
    name: 'Nazil Svanidze',
    designation: 'Designer',
    company: 'Self employed',
    image: client1,
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' like Nataly does.",
    name: 'Evgeniy Sukharnikov ',
    designation: 'IE',
    company: 'Batumi Bottom',
    image: client2,
  },
  {
    testimonial:
      "After Nataly visualized our first cottage we work on an ongoing basis with her and her team. Fast result and maximum technical understanding. It's rare.",
    name: 'Lisa Block',
    designation: 'CTO',
    company: 'First development',
    image: client3,
  },
];

const work_text = {
  my_work_header: 'My ',
  my_work_header1: 'Projects...',
  my_work_intro:
    'Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.',
};

const projects = [
  {
    name: 'Furniture Modeling, Sofa, for Interior.',
    description: 'Modeling any furniture to order according to drawings and references. Attention to detail and professional results. Any formats and adaptation for any use :)',
    tags: [
      {
        name: 'furniture',
        color: 'blue-text-gradient',
      },
      {
        name: 'visualization',
        color: 'green-text-gradient',
      },
      {
        name: 'modeling',
        color: 'pink-text-gradient',
      },
    ],
    image: sofaModeling,
    source_code_link: 'https://www.behance.net/gallery/187794293/modelirovanie-3D-divana',
  },  
  {
    name: "Furniture Modeling, Chair, Complex Design",
    description: "Modeling any furniture to order according to drawings and references. Attention to detail and professional results. Any formats and adaptation for any use :)",
    tags: [
      {
        name: "furniture",
        color: "blue-text-gradient",
      },
      {
        name: "visualization",
        color: "green-text-gradient",
      },
      {
        name: "modeling",
        color: "pink-text-gradient",
      },
    ],
    image: chairmodeling,
    source_code_link: "https://www.behance.net/gallery/191756637/Chair-modeling",
  },  
  {
    name: "Visualization of a Room by the Sea",
    description: "One of my first works. This visual was necessary for my account. It turned out very interesting :)",
    tags: [
      {
        name: "interior",
        color: "blue-text-gradient",
      },
      {
        name: "visualization",
        color: "green-text-gradient",
      },
      {
        name: "modeling",
        color: "pink-text-gradient",
      },
    ],
    image: interiorForDesigner,
    source_code_link: "https://www.behance.net/gallery/170836005/Visualization-of-a-room-in-a-house-by-the-sea",
  },  
  {
    name: "Barton Hills Residence Visualization in Austin, Texas, Reference Work",
    description: "A popular photo on the internet that also attracted me with its harmonious combination of wood, glass, and steel, and the contrast of warm and cool tones.",
    tags: [
      {
        name: "exterior",
        color: "blue-text-gradient",
      },
      {
        name: "visualization",
        color: "green-text-gradient",
      },
      {
        name: "modeling",
        color: "pink-text-gradient",
      },
    ],
    image: cottagebyrefference,
    source_code_link: "https://www.behance.net/gallery/180671299/rezidencija-Barton-Hills",
  },  
  {
    name: "Atmospheric Exterior - Lake House",
    description: "A cozy cottage on the shore of a lake, deep in the forest. Taking such a photograph is very expensive, but there is an alternative - to contact a visualizer who can create something even better than a photograph.",
    tags: [
      {
        name: "exterior",
        color: "blue-text-gradient",
      },
      {
        name: "visualization",
        color: "green-text-gradient",
      },
      {
        name: "modeling",
        color: "pink-text-gradient",
      },
    ],
    image: cabinonalake,
    source_code_link: "https://www.behance.net/gallery/175309075/domik-v-tumane",
  },  
  {
    name: "Modular Home Mini-Theater Project",
    description: "A company that manufactures modular homes is expanding its range with mini-theaters. Visualizations were needed for the catalog, which I completed in a short time. Selecting furniture, paintings, and other details can sometimes take a lot of time, but my experience allows me to solve this task quickly, even if it requires modeling from scratch.",
    tags: [
      {
        name: "interior",
        color: "blue-text-gradient",
      },
      {
        name: "visualization",
        color: "green-text-gradient",
      },
      {
        name: "modeling",
        color: "pink-text-gradient",
      },
    ],
    image: moduleMovieTheater,
    source_code_link: "https://www.behance.net/gallery/192381607/3D-visualization-of-the-interior-of-a-modular-home",
  },
  {
    name: "Interior Visualization for Inart.studio Design Studio",
    description: "The design studio approached us for a step-by-step visualization of a client's apartment interior. We started with the hallway, where we quickly agreed on all materials and their colors. Full mutual understanding with the client was also achieved for the subsequent stages of work.",
    tags: [
      {
        name: "interior",
        color: "blue-text-gradient",
      },
      {
        name: "visualization",
        color: "green-text-gradient",
      },
      {
        name: "modeling",
        color: "pink-text-gradient",
      },
    ],
    image: inartdesign,
    source_code_link: "https://www.behance.net/gallery/202638697/prihozhaja-Nemo",
  },
  {
    name: "Modular House Interior Visualization",
    description: "A company that creates modular homes approached us to create vibrant visualizations for their catalogs. The materials of the furniture, glass interior details, and the view from the window all had to meet high standards. Post-processing was also applied in Adobe Photoshop.",
    tags: [
      {
        name: "modular house",
        color: "blue-text-gradient",
      },
      {
        name: "interior",
        color: "green-text-gradient",
      },
      {
        name: "construction",
        color: "pink-text-gradient",
      },
    ],
    image: modularHouse,
    source_code_link: "https://www.behance.net/gallery/203657751/3D-visualization-of-the-interior-of-a-modular-house",
  },
  {
    name: "Living Room Visualization",
    description: "This project uses advanced lighting techniques to create a natural and pleasant atmosphere. The visualization showcases a cozy and functional space, perfect for comfortable living.",
    tags: [
      {
        name: "room",
        color: "blue-text-gradient",
      },
      {
        name: "interior",
        color: "green-text-gradient",
      },
      {
        name: "design",
        color: "pink-text-gradient",
      },
    ],
    image: livingroom,
    source_code_link: "https://www.behance.net/gallery/204735049/Living-room-visualization",
  },
  {
    name: 'Cottage in every detail',
    description:
      "Detailed 3D model of a cottage based on an architectural project. Realistic rendering, for which the materials were carefully worked out to reflect the designer's intent and show the benefits of his ideas to a real client.",
    tags: [
      {
        name: 'cottage',
        color: 'blue-text-gradient',
      },
      {
        name: 'exteriors',
        color: 'green-text-gradient',
      },
      {
        name: 'construction',
        color: 'pink-text-gradient',
      },
    ],
    image: cottageindetails,
    source_code_link:
      'https://www.behance.net/gallery/187006515/Two-sottages',
  },
  {
    name: 'Interior for the client',
    description:
      'Visualization of the interior in the style of "boho", which demonstrates the atmosphere in the room after the proposed renovation. The combination of materials in finishes, furniture and décor, layering, colors and textures all create a dynamic and interesting space.',
    tags: [
      {
        name: 'interior',
        color: 'blue-text-gradient',
      },
      {
        name: 'visualization',
        color: 'green-text-gradient',
      },
      {
        name: 'corona_render',
        color: 'pink-text-gradient',
      },
    ],
    image: interior,
    source_code_link:
      'https://www.behance.net/gallery/181745155/kvartira-v-stile-BOHO',
  },
  {
    name: 'Kitchen modeling',
    description:
      'Modeling of kitchen furniture based on drawings and measurements of a real room. Selection of materials and their study in the interior of the client. Understanding the end result of installing expensive furniture in the kitchen interior, as well as clear space planning.',
    tags: [
      {
        name: 'modeling',
        color: 'blue-text-gradient',
      },
      {
        name: 'furniture',
        color: 'green-text-gradient',
      },
      {
        name: 'kitchen',
        color: 'pink-text-gradient',
      },
      {
        name: '3d_development',
        color: 'red-text-gradient',
      },
    ],
    image: kitchen,
    source_code_link:
      'https://www.behance.net/gallery/172495263/kuhnja-v-svetlyh-tonah',
  },
];

const contact_text = {
  place_order: 'or place your order on Upwork or another platform...',
  alert_message_sent: 'Thank you. I will get back to you as soon as possible.',
  alert_message_wrong: 'Something went wrong.',
  get_in_touch: 'Get in touch',
  contact_text: 'Contact.',
  form_your_name: 'Your Name',
  form_your_name_placeholder: "What's your name?*",
  form_your_email: 'Your Email',
  form_your_email_placeholder: "What's your email?*",
  form_your_message: 'Your Message',
  form_your_message_placeholder: 'What is your request?*',
  form_sending_message: 'Sending...',
  form_sent_message: 'Send',
  form_title_whatsup: 'Chat with me on WhatsUp!',
  form_title_telega: 'Chat with me on Telegram!',
};

const toglerTexts = ['Email', 'Upwork, Behance etc.']

const platforms = [
  {
    name: 'Upwork',
    icon: upworkIcon,
    link: 'https://www.upwork.com/freelancers/~01d0f2bad182092161?mp_source=share'
  },
  {
    name: 'Behance',
    icon: behanceIcon,
    link: 'https://www.behance.net/natatulia',
  },
  {
    name: 'LinkedIn',
    icon: linkedinIcon,
    link: 'https://www.linkedin.com/in/наталья-матвеева-5b77912a2'
  },
  {
    name: 'Kwork',
    icon: kworkIcon,
    link: ''
  },
];

export default {
  contact_text,
  herotext,
  intro,
  navLinks,
  services,
  technologies,
  technologiesHeader,
  experiences,
  testimonials,
  projects,
  experience_header,
  testimonials_text,
  work_text,
  toglerTexts, 
  platforms
};
