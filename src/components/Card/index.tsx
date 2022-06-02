import { ComponentPropsWithoutRef, forwardRef } from 'react';

import SComp from './CardElements';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  title: any;
  text: any;
  url?: any;
  imageUrl: any;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, text, url, imageUrl }, ref) => (
    <SComp.Card className={className} ref={ref}>
      <SComp.CardImage src={imageUrl} alt={title} />
      <SComp.CardBody>
        <SComp.CardTitle>{title}</SComp.CardTitle>
        <SComp.CardText>{text}</SComp.CardText>
        <SComp.CardLink href={url}>See More</SComp.CardLink>
      </SComp.CardBody>
    </SComp.Card>
  )
);

export default Card;
