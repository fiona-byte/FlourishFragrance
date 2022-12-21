import usePagination from '@mui/material/usePagination';
import ChevronLeft from '../../assets/svgs/chevronLeft';
import ChevronRight from '../../assets/svgs/chevronRight';
import { PaginationButton, PaginationList, PaginationWrapper } from './pagination.style';

const Pagination = () => {
  const { items } = usePagination({
    count: 5,
  });

  return (
    <PaginationWrapper>
      {items.map(({ page, type, selected, ...item }, index) => {
        let children = null;

        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
          children = <PaginationButton style={{ cursor: 'default' }}>…</PaginationButton>;
        } else if (type === 'page') {
          children = (
            <PaginationButton
              type='button'
              style={{
                color: selected ? '#f4f4f4' : undefined,
                backgroundColor: selected ? '#0d0d0d' : undefined,
              }}
              {...item}
            >
              {page}
            </PaginationButton>
          );
        } else {
          children = (
            <PaginationButton {...item}>
              {type === 'previous' ? (
                <ChevronLeft className='pagination__icon' />
              ) : (
                <ChevronRight className='pagination__icon' />
              )}
            </PaginationButton>
          );
        }

        return (
          <PaginationList
            style={{
              marginRight: type === 'previous' ? '3.2rem' : undefined,
              marginLeft: type === 'next' ? '3.2rem' : undefined,
            }}
            key={index}
          >
            {children}
          </PaginationList>
        );
      })}
    </PaginationWrapper>
  );
};

export default Pagination;
