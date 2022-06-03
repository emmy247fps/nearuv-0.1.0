import React, { memo } from 'react';
import MetaTags from 'react-meta-tags';

const Meta = (props) => {
    const { 
        pageTitle,
        description, // this description is a meta array that has 'id, name, and content as its elements
        ogTitle, // this description is a meta array that has 'id, name, and content as its elements
        ogImage, // this description is a meta array that has 'id, name, and content as its elements

    } = props;
    return (
        <div class="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta id="meta-description" name="description" content="Some description." />
            <meta id="og-title" property="og:title" content="MyApp" />
            <meta property="og:image" content="imgUrl" />
            <meta property="og:description" content="Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime. Enjoy low prices and great deals on the largest selection of everyday essentials and other products, including fashion, home, beauty, electronics, Alexa Devices, sporting goods, toys, automotive, pets, baby, books, video games, musical instruments, office supplies, and more." />
          </MetaTags>
          <div class="content"> Some Content </div>
        </div>
      )
};

export default memo(Meta)