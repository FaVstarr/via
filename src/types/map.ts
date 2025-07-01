export interface MapPageProps{
  onSearch: (location: string) => void,
  mapCenter: [number, number],
  accessToken: string
}