import {
  ReviewProfileCard,
  ReviewProfileHeading,
  ReviewProfileImage,
  ReviewProfileSub,
  ReviewsBox,
  ReviewsContainer,
  ReviewSeperator,
  ReviewsIconButton,
  ReviewsIconContainer,
  ReviewsText,
} from './reviews.styles';
import productImg from '../../assets/imgs/product img.png';
import ChevronLeft from '../../assets/svgs/chevronLeft';
import ChevronRight from '../../assets/svgs/chevronRight';

const Reviews = () => {
  return (
    <ReviewsContainer>
      <h2 className='heading'>Reviews</h2>
      <ReviewsBox>
        <ReviewsIconContainer>
          <ReviewsIconButton>
            <ChevronLeft />
          </ReviewsIconButton>
          <ReviewsIconButton>
            <ChevronRight />
          </ReviewsIconButton>
        </ReviewsIconContainer>
        <div>
          <div className=''>
            <ReviewProfileCard>
              <ReviewProfileImage src={productImg} />
              <div>
                <ReviewProfileHeading>Janet Doe</ReviewProfileHeading>
                <ReviewProfileSub>Stylist</ReviewProfileSub>
              </div>
            </ReviewProfileCard>
            <ReviewsText>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sapiente rerum cupiditate dolor placeat
              atque voluptate, laudantium ducimus quae similique."
            </ReviewsText>
          </div>
        </div>
        {/* <ReviewSeperator />
        <div>
          <div className=''>
            <ReviewProfileCard>
              <ReviewProfileImage src={productImg} />
              <div>
                <ReviewProfileHeading>Janet Doe</ReviewProfileHeading>
                <ReviewProfileSub>Stylist</ReviewProfileSub>
              </div>
            </ReviewProfileCard>
            <ReviewsText>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sapiente rerum cupiditate dolor placeat
              atque voluptate, laudantium ducimus quae similique."
            </ReviewsText>
          </div>
        </div> */}
      </ReviewsBox>
    </ReviewsContainer>
  );
};

export default Reviews;
