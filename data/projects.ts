export type Project = {
  index: string
  title: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'Fieldnote — inventory tracker for small warehouses',
    description:
      'A MERN app that replaced a shared spreadsheet for a 12-person warehouse team: barcode lookups, low-stock alerts, and a live dashboard built on Socket.io for real-time updates.',
    tags: ['MongoDB', 'Express', 'React', 'Socket.io'],
  },
  {
    index: '02',
    title: 'Payhive — invoicing for freelancers',
    description:
      'Lets freelancers create branded invoices, track payment status, and send automatic reminders. Handles Stripe payments and PDF generation server-side with Node.',
    tags: ['Node.js', 'React', 'Stripe API', 'JWT auth'],
  },
  {
    index: '03',
    title: 'Trailmark — hiking route planner',
    description:
      'A community app for sharing hiking routes in Gilgit-Baltistan, with offline map caching and a moderation queue for user-submitted trails.',
    tags: ['MongoDB Atlas', 'Express', 'React Native'],
  },
]
