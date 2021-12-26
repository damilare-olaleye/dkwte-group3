export interface Restaurant {
  id: number,
  icon: string,
  name: string,
  opening_hours: {open_now: boolean},
  rating: number,
  vicinity: string
}
