export type User = {
  type: "candidate" | "company",
  name: string,
  photo: string
}

const USER: User = {
  name: "John Dow",
  type: "candidate",
  photo: "images/man_with_laptop.webp"
}

export default USER;