import {
  ReviewContainer,
  ReviewProfileCard,
  ReviewProfileHeading,
  ReviewProfileImage,
  ReviewProfileSub,
  ReviewsBox,
  ReviewsContainer,
  ReviewsDots,
  ReviewsDotsContainer,
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
      <div style={{ backgroundColor: '#1B2021', borderRadius: '8px' }}>
        <ReviewsBox>
          <ReviewsIconContainer>
            <ReviewsIconButton>
              <ChevronLeft />
            </ReviewsIconButton>
            <ReviewsIconButton>
              <ChevronRight />
            </ReviewsIconButton>
          </ReviewsIconContainer>
          <ReviewContainer>
            <div>
              <ReviewProfileCard>
                <ReviewProfileImage src={productImg} />
                <div>
                  <ReviewProfileHeading>Janet Doe</ReviewProfileHeading>
                  <ReviewProfileSub>Stylist</ReviewProfileSub>
                </div>
              </ReviewProfileCard>
              <ReviewsText>
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sapiente rerum cupiditate dolor
                placeat atque voluptate, laudantium ducimus quae similique."
              </ReviewsText>
            </div>
          </ReviewContainer>
          <ReviewSeperator />
          <ReviewContainer>
            <div>
              <ReviewProfileCard>
                <ReviewProfileImage src={productImg} />
                <div>
                  <ReviewProfileHeading>John Doe</ReviewProfileHeading>
                  <ReviewProfileSub>Lawyer</ReviewProfileSub>
                </div>
              </ReviewProfileCard>
              <ReviewsText>
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sapiente rerum cupiditate dolor
                placeat atque voluptate, laudantium ducimus quae similique."
              </ReviewsText>
            </div>
          </ReviewContainer>
        </ReviewsBox>
        <ReviewsDotsContainer>
          <ReviewsDots />
          <ReviewsDots />
          <ReviewsDots />
        </ReviewsDotsContainer>
      </div>
    </ReviewsContainer>
  );
};

export default Reviews;
