export interface ImageType {
  link: string;
  width: number;
  height: number;
  alt: string;
}
export interface GuardianReviewsCardType {
  id: string;
  image: ImageType;
  authorName: string;
  profession: string;
  rating: number;
  comment: string;
}