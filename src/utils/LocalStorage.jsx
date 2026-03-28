
export const Employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    taskNumber: { active: 4, newTask: 3, completed: 2, failed: 1 },
    tasks: [
      { title: "Design login page", description: "Create UI for login page", date: "2026-03-24", category: "Design", active: true, newTask: true, completed: false, failed: false },
      { title: "Fix navbar bug", description: "Resolve responsive issue", date: "2026-03-23", category: "Development", active: false, newTask: false, completed: true, failed: false },
      { title: "Update profile page", description: "Add edit functionality", date: "2026-03-22", category: "Development", active: false, newTask: false, completed: false, failed: true }
    ]
  },
  {
    id: 2,
    firstName: "Ayush",
    email: "employee2@example.com",
    password: "123",
    taskNumber: { active: 2, newTask: 1, completed: 6, failed: 0 },
    tasks: [
      { title: "Write API docs", description: "Document all endpoints", date: "2026-03-24", category: "Documentation", active: true, newTask: true, completed: false, failed: false },
      { title: "Test payment flow", description: "Check all edge cases", date: "2026-03-23", category: "Testing", active: false, newTask: false, completed: true, failed: false },
      { title: "Fix checkout bug", description: "Resolve cart issue", date: "2026-03-22", category: "Development", active: false, newTask: false, completed: false, failed: true }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskNumber: { active: 2, newTask: 8, completed: 10, failed: 3 },
    tasks: [
      { title: "Create dashboard UI", description: "Design admin dashboard", date: "2026-03-24", category: "Design", active: true, newTask: true, completed: false, failed: false },
      { title: "Optimize images", description: "Reduce load time", date: "2026-03-23", category: "Performance", active: false, newTask: false, completed: true, failed: false },
      { title: "Fix CSS issues", description: "Resolve alignment bugs", date: "2026-03-22", category: "Development", active: false, newTask: false, completed: false, failed: true }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskNumber: { active: 10, newTask: 5, completed: 10, failed: 4 },
    tasks: [
      { title: "Setup database", description: "Initialize MongoDB", date: "2026-03-24", category: "Backend", active: true, newTask: true, completed: false, failed: false },
      { title: "API integration", description: "Connect frontend to backend", date: "2026-03-23", category: "Development", active: false, newTask: false, completed: true, failed: false },
      { title: "Fix auth bug", description: "Resolve login issue", date: "2026-03-22", category: "Backend", active: false, newTask: false, completed: false, failed: true }
    ]
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumber: { active: 12, newTask: 5, completed: 10, failed: 6 },
    tasks: [
      { title: "SEO optimization", description: "Improve search ranking", date: "2026-03-24", category: "Marketing", active: true, newTask: true, completed: false, failed: false },
      { title: "Write blog post", description: "Publish product article", date: "2026-03-23", category: "Content", active: false, newTask: false, completed: true, failed: false },
      { title: "Fix meta tags", description: "Improve SEO tags", date: "2026-03-22", category: "Marketing", active: false, newTask: false, completed: false, failed: true }
    ]
  }
];

export const Admin = [
  { id: 1, email: "admin@example.com", password: "123" }
];


export const setLocalStorage = () => {
  if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
    localStorage.setItem('employees', JSON.stringify(Employees));
    localStorage.setItem('admin', JSON.stringify(Admin));
  }
};


export const getLocalStorage = () => {
  try {
    const employeesData = JSON.parse(localStorage.getItem('employees')) || [];
    const adminData = JSON.parse(localStorage.getItem('admin')) || [];
    return { employees: employeesData, admin: adminData };
  } catch (error) {
    console.error('Error parsing localStorage:', error);
    return { employees: [], admin: [] };
  }
};