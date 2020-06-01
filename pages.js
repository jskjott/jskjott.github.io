const pages = [
  {
    title: '',
    source: 'home.md',
    altText: 'foliage in south England',
    img: 'img/plant01.jpg',
    mentionedIn: [],
    mentionedPages: [ 'tactile', 'mediums', 'research', 'about' ]
  },
  {
    title: 'tactile',
    source: 'tactile.md',
    altText: 'Geraniums on the porch',
    img: 'img/tactile.jpg',
    mentionedIn: [ '' ],
    mentionedPages: [ 'bricolage', 'craft' ]
  },
  {
    title: 'bricolage',
    source: 'bricolage.md',
    altText: 'Collected items',
    img: 'img/bricolage.jpg',
    mentionedIn: [ 'tactile' ],
    mentionedPages: []
  },
  {
    title: 'craft',
    source: 'craft.md',
    altText: 'monkeys fist and macrame beads',
    img: 'img/craft.jpg',
    mentionedIn: [ 'tactile' ],
    mentionedPages: [ 'fermentation', 'writing_drawings' ]
  },
  {
    title: 'hints',
    source: 'hints.md',
    altText: 'Morning in Daerim-dong',
    img: 'img/cropped_daerim.jpg',
    mentionedIn: [],
    mentionedPages: []
  },
  {
    title: 'mediums',
    source: 'mediums.md',
    altText: 'Glitch Hands',
    img: 'img/mediums.png',
    mentionedIn: [ '', 'jonathan' ],
    mentionedPages: [ 'time_based', 'documenting' ]
  },
  {
    title: 'static',
    source: 'static.md',
    altText: 'Morning in Daerim-dong',
    img: 'img/cropped_daerim.jpg',
    mentionedIn: [],
    mentionedPages: []
  },
  {
    title: 'time_based',
    source: 'time_based.md',
    altText: 'creating a slitscan',
    img: 'img/time-based.png',
    mentionedIn: [ 'mediums' ],
    mentionedPages: [
      'git_for_filmmakers',
      'slitscan_experiments',
      'midi_plotter',
      'The_Printing_Process_as_Time_based_Media',
      'color_in_film',
      'auto_rickshaw'
    ]
  },
  {
    title: 'documenting',
    source: 'documenting.md',
    altText: 'Morning in Daerim-dong',
    img: 'img/cropped_daerim.jpg',
    mentionedIn: [ 'jonathan', 'mediums' ],
    mentionedPages: [ 'auto_rickshaw' ]
  },
  {
    title: 'research',
    source: 'research.md',
    altText: 'paperwork',
    img: 'img/paperwork_2-min.jpg',
    mentionedIn: [ '' ],
    mentionedPages: [ 'tools', 'studies' ]
  },
  {
    title: 'tools',
    source: 'tools.md',
    altText: 'from Medium is the Message',
    img: 'img/mcluhan.jpg',
    mentionedIn: [ 'research' ],
    mentionedPages: [ 'visiweave', 'git_for_filmmakers', 'midi_plotter' ]
  },
  {
    title: 'about',
    source: 'about.md',
    altText: 'Morning in Daerim-dong',
    img: 'img/cropped_daerim.jpg',
    mentionedIn: [ '' ],
    mentionedPages: [ 'resevoir', 'lifestyle', 'jonathan' ]
  },
  {
    title: 'resevoir',
    source: 'resevoir.md',
    altText: 'Arno Schmidt`s notes for Zettels Traum',
    img: 'img/Arno_Schmidt_Zettels_Traum.jpg',
    mentionedIn: [ 'about', 'lifestyle' ],
    mentionedPages: []
  },
  {
    title: 'lifestyle',
    source: 'lifestyle.md',
    altText: 'Morning in Daerim-dong',
    img: 'img/cropped_daerim.jpg',
    mentionedIn: [ 'about' ],
    mentionedPages: [ 'resevoir', 'deep_work' ]
  },
  {
    title: 'jonathan',
    source: 'jonathan.md',
    altText: 'Jonathan',
    img: 'img/jona_portrait.jpg',
    mentionedIn: [ 'about' ],
    mentionedPages: [
      'documenting',
      'visiweave',
      'mediums',
      'library',
      'manifestations'
    ]
  },
  {
    title: 'projects',
    source: 'projects.js',
    altText: 'Beehive houses in Daerim-dong',
    img: 'img/postcard5-min.jpg',
    mentionedIn: [],
    mentionedPages: [
      'auto_rickshaw',
      'daerim_dong',
      'service_design',
      'git_for_filmmakers',
      'portable_typewriter',
      'midi_plotter',
      'webring',
      'trails',
      'community_network_project',
      'kiron'
    ]
  },
  {
    title: 'manifestations',
    source: 'manifestations.js',
    altText: 'transmutation',
    img: 'img/manifestation.jpg',
    mentionedIn: [ 'jonathan' ],
    mentionedPages: [
      'urgency',
      'quotes',
      'space',
      'targets',
      'biking',
      'fermentation'
    ]
  },
  {
    title: 'studies',
    source: 'studies.js',
    img: 'img/collage-min.jpg',
    altText: 'Detail from Victoria and Albert, London',
    mentionedIn: [ 'research' ],
    mentionedPages: [
      'text',
      'slitscan_experiments',
      'The_Printing_Process_as_Time_based_Media',
      'annotation',
      'writing_drawings',
      'intermediate_representations'
    ]
  },
  {
    title: 'practice',
    source: 'practices.md',
    img: 'img/practice.JPG',
    altText: 'sketching process shot',
    mentionedIn: [],
    mentionedPages: []
  },
  {
    title: 'cycles',
    source: 'cycles.md',
    img: 'img/practice.JPG',
    altText: 'sketching process shot',
    mentionedIn: [],
    mentionedPages: []
  },
  {
    title: 'text',
    source: 'text.md',
    altText: 'methods of constructing letterforms - Institutionum Geometricarum',
    img: 'img/Albrecht_Durer_letterforms.jpg',
    mentionedIn: [ 'studies' ],
    mentionedPages: []
  },
  {
    title: 'intermediate_representations',
    source: 'intermediate_representations.md',
    altText: 'Malraux, Museum without Walls',
    img: 'img/a_book_museum_without_walls.jpeg',
    mentionedIn: [ 'studies' ],
    mentionedPages: [ 'pointers' ]
  },
  {
    title: 'chasmic',
    source: 'chasmic.md',
    altText: 'the Chasmic interface',
    img: 'img/chasmic_log.png',
    mentionedIn: [ 'deep_work' ],
    mentionedPages: []
  },
  {
    title: 'org-mode',
    source: 'org-mode.md',
    altText: 'Malraux, Museum without Walls',
    img: 'img/a_book_museum_without_walls.jpeg',
    mentionedIn: [ 'deep_work' ],
    mentionedPages: []
  },
  {
    title: 'pointers',
    source: 'pointers.md',
    altText: 'methods of constructing letterforms - Institutionum Geometricarum',
    img: 'img/Albrecht_Durer_letterforms.jpg',
    mentionedIn: [ 'intermediate_representations', 'portable_typewriter' ],
    mentionedPages: [ 'portable_typewriter', 'midi_plotter' ]
  },
  {
    title: 'slitscan_experiments',
    source: 'slitscan_experiments.md',
    img: 'img/slitscan_hands.png',
    altText: 'Glitch Hands',
    mentionedIn: [ 'studies', 'time_based' ],
    mentionedPages: []
  },
  {
    title: 'The_Printing_Process_as_Time_based_Media',
    source: 'The_Printing_Process_as_Time_based_Media.md',
    altText: 'Visualisation produced by playing Partita I. by Bach',
    img: 'img/midi-plotter-eli-cropped.jpg',
    mentionedIn: [ 'midi_plotter', 'portable_typewriter', 'studies', 'time_based' ],
    mentionedPages: [ 'portable_printing' ]
  },
  {
    title: 'portable_printing',
    source: 'portable_typewriter.md',
    altText: 'Receipt Printer Typerwriter prototype',
    img: 'img/typewriter_1.png',
    mentionedIn: [ 'The_Printing_Process_as_Time_based_Media' ],
    mentionedPages: []
  },
  {
    title: 'annotation',
    source: 'annotation_design.md',
    altText: 'Inspiration layout',
    img: 'https://d2w9rnfcy7mm78.cloudfront.net/2573278/original_375da73d37d4ee36a4390682819a6fd7.jpg?1534687304',
    mentionedIn: [ 'studies' ],
    mentionedPages: []
  },
  {
    title: 'quotes',
    source: 'quotes.md',
    altText: 'notes from a design project',
    img: 'img/paperwork_2-min.jpg',
    mentionedIn: [ 'manifestations' ],
    mentionedPages: []
  },
  {
    title: 'library',
    source: 'library.md',
    img: 'img/books_graphic.png',
    mentionedIn: [ 'jonathan' ],
    mentionedPages: []
  },
  {
    title: 'space',
    source: 'space.md',
    img: 'img/superstudio.jpg',
    altText: 'Supersurfaces - Superstudio',
    mentionedIn: [ 'manifestations' ],
    mentionedPages: []
  },
  {
    title: 'targets',
    source: 'targets.md',
    img: 'img/Albrecht_Dürer_The_Large_Piece_of_Turf,_1503.jpg',
    altText: 'Albrecht Dürer, The Large Piece of Turf',
    mentionedIn: [ 'manifestations' ],
    mentionedPages: [ 'EOY_2019' ]
  },
  {
    title: 'EOY_2019',
    source: 'EOY_2019.md',
    img: 'img/Albrecht_Dürer_The_Large_Piece_of_Turf,_1503.jpg',
    altText: 'Albrecht Dürer, The Large Piece of Turf',
    mentionedIn: [ 'targets' ],
    mentionedPages: []
  },
  {
    title: 'biking',
    source: 'biking.md',
    altText: 'biking on Randalls and Wards Island',
    img: 'img/biking.jpg',
    mentionedIn: [ 'manifestations' ],
    mentionedPages: []
  },
  {
    title: 'deep_work',
    source: 'deep_work.md',
    altText: 'forest in south England',
    img: 'img/plant_deep_work.jpg',
    mentionedIn: [ 'lifestyle' ],
    mentionedPages: [ 'chasmic', 'org-mode' ]
  },
  {
    title: 'urgency',
    source: 'urgency.md',
    img: 'img/urgency_icon.png',
    mentionedIn: [ 'manifestations' ],
    mentionedPages: []
  },
  {
    title: 'git_for_filmmakers',
    source: 'git_for_filmmakers.md',
    cover: 'img/git_for_filmmakers.png',
    altText: 'screenshot of prototype GUI',
    img: 'img/git_for_filmmakers_aug21.png',
    mentionedIn: [ 'projects', 'time_based', 'tools' ],
    mentionedPages: []
  },
  {
    title: 'webring',
    source: 'webring.md',
    cover: 'img/webring.png',
    altText: 'screenshot of the webring member directory',
    img: 'img/webring.png',
    mentionedIn: [ 'projects' ],
    mentionedPages: []
  },
  {
    title: 'midi_plotter',
    source: 'midi_plotter.md',
    cover: 'img/midi-plotter.png',
    altText: 'Visualisation produced by playing Partita I. by Bach',
    img: 'img/midi-plotter-eli-cropped.jpg',
    mentionedIn: [ 'pointers', 'projects', 'time_based', 'tools' ],
    mentionedPages: [ 'The_Printing_Process_as_Time_based_Media' ]
  },
  {
    title: 'community_network_project',
    source: 'community_network_project.md',
    cover: 'img/community_network_project.png',
    img: 'img/community_network_project.gif',
    altText: 'a screenshot of the produced interactive data visualisation',
    mentionedIn: [ 'projects' ],
    mentionedPages: []
  },
  {
    title: 'service_design',
    source: 'service_design.md',
    img: 'img/paperwork_1.jpg',
    cover: 'img/paperwork_1.jpg',
    altText: 'our data wall',
    mentionedIn: [ 'projects' ],
    mentionedPages: []
  },
  {
    title: 'kiron',
    source: 'kironMOOC.md',
    cover: 'img/kiron_alternative.png',
    altText: 'a photo of the Kiron course leaders',
    img: 'img/kiron_drawing.png',
    mentionedIn: [ 'projects' ],
    mentionedPages: []
  },
  {
    title: 'auto_rickshaw',
    source: 'auto_rickshaw.js',
    cover: 'img/auto_rickshaw.png',
    altText: 'a photo of an auto rickshaw with a driver and a passenger',
    img: 'img/tuktuk2.jpg',
    mentionedIn: [ 'documenting', 'projects', 'time_based' ],
    mentionedPages: []
  },
  {
    title: 'fraktur',
    source: 'fraktur.md',
    cover: 'img/fraktur.png',
    img: 'img/fraktur_progression.png',
    altText: 'illustration of different fraktur writing turorials',
    mentionedIn: [],
    mentionedPages: [ 'historiography' ]
  },
  {
    title: 'trails',
    source: 'trails.md',
    cover: 'img/trails.png',
    altText: 'the primary visual identity of the project',
    img: 'img/horizontal_trails-01.png',
    mentionedIn: [ 'projects' ],
    mentionedPages: []
  },
  {
    title: 'my_home',
    source: 'portfolio_site.md',
    cover: 'img/my_home.png',
    altText: 'a graphic in the shape of a house',
    img: 'img/my_home.png',
    mentionedIn: [],
    mentionedPages: []
  },
  {
    title: 'portable_typewriter',
    source: 'portable_typewriter.md',
    cover: 'img/portable_typewriter.png',
    altText: 'Receipt Printer Typerwriter prototype',
    img: 'img/typewriter_1.png',
    mentionedIn: [ 'pointers', 'projects' ],
    mentionedPages: [ 'pointers', 'The_Printing_Process_as_Time_based_Media' ]
  },
  {
    title: 'historiography',
    source: 'digital_historiogaphy.md',
    cover: 'img/spatially_concious_news.png',
    altText: 'a visualisation of the prominent places found in my analysis',
    img: 'img/history.png',
    mentionedIn: [ 'fraktur' ],
    mentionedPages: []
  },
  {
    title: 'news',
    source: 'spatially_concious_news.md',
    cover: 'img/digital_historiogaphy.png',
    altText: 'the visualisation used in the GUI',
    img: 'img/spatial_news.png',
    mentionedIn: [],
    mentionedPages: []
  },
  {
    title: 'daerim_dong',
    source: 'joseonjok.md',
    cover: 'img/daerim_dong.png',
    altText: 'A photo of the street in Daerim-dong',
    img: 'img/postcard5-min.jpg',
    mentionedIn: [ 'projects' ],
    mentionedPages: []
  },
  {
    title: 'color_in_film',
    source: 'color_in_film.md',
    cover: 'img/modelling_color_in_film.png',
    img: 'img/color_in_film4.png',
    altText: 'a visualisation showing the average color in feature films',
    mentionedIn: [ 'time_based' ],
    mentionedPages: []
  },
  {
    title: 'slitscan_video',
    source: 'slitscan_experiments.md',
    img: 'img/slitscan_hands.png',
    altText: 'Glitch Hands',
    mentionedIn: [],
    mentionedPages: []
  },
  {
    title: 'writing_drawings',
    source: 'writing_drawings.md',
    img: 'img/line_rhytmical_stick.jpg',
    altText: 'Line-rhytmical study of a stick',
    mentionedIn: [ 'craft', 'studies' ],
    mentionedPages: []
  },
  {
    title: 'year_in_books_2019',
    source: 'year_in_books_2019.md',
    img: 'img/some_readings_2019.png',
    altText: 'A few of the books I read in 2019',
    mentionedIn: [],
    mentionedPages: []
  },
  {
    title: 'tools_for_expression',
    source: 'tools_for_expression.md',
    img: 'img/collage-min.jpg',
    altText: 'Detail from Victoria and Albert, London',
    mentionedIn: [],
    mentionedPages: []
  },
  {
    title: 'art',
    source: 'art.js',
    cover: 'img/glitch_hands.png',
    altText: 'frame from Glitch Hands',
    img: 'img/glitch_hands.png',
    mentionedIn: [],
    mentionedPages: []
  },
  {
    title: 'fermentation',
    source: 'fermentation.md',
    cover: 'img/fermentation.png',
    altText: 'character design process illustration',
    img: 'img/fermentation.png',
    mentionedIn: [ 'craft', 'manifestations' ],
    mentionedPages: []
  },
  {
    title: 'visiweave',
    source: 'visiweave.md',
    altText: 'the VisiWeave interface ',
    img: 'img/visiweave_interface.png',
    mentionedIn: [ 'jonathan', 'tools' ],
    mentionedPages: []
  }
]
