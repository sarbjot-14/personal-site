// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript/Typescript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Redux/Zustand',
    competency: 4,
    category: ['Web Development', 'Tools', 'Javascript'],
  },
  {
    title: 'Tailwind',
    competency: 4,
    category: ['Web Development', 'Tools', 'Web Development'],
  },

  {
    title: 'Jest/Mocha/Simon',
    competency: 4,
    category: ['Web Development', 'Tools', 'Tools'],
  },
  {
    title: 'Angular',
    competency: 5,
    category: ['Web Development', 'Tools', 'Web Development'],
  },
  {
    title: 'Postman',
    competency: 4,
    category: ['Web Development', 'Tools', 'Web Development'],
  },
  {
    title: 'useQuery',
    competency: 3,
    category: ['Web Development', 'Tools', 'Javascript'],
  },
  {
    title: 'Firebase',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Flutter',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },

  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Prisma',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Sequelize',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },

  // {
  //   title: 'ElasticSearch',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  // {
  //   title: 'Redis',
  //   competency: 3,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'Data Mining',
  //   competency: 3,
  //   category: ['Data Science'],
  // },
  {
    title: 'Express.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },

  {
    title: 'Flask',
    competency: 2,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 1,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  // {
  //   title: 'Numba',
  //   competency: 2,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  // {
  //   title: 'Tensorflow + Keras',
  //   competency: 3,
  //   category: ['Data Science', 'Python'],
  // },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },

  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },

  {
    title: 'Pandas',
    competency: 2,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 2,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  // {
  //   title: 'Hadoop',
  //   competency: 1,
  //   category: ['Data Engineering', 'Data Science'],
  // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
