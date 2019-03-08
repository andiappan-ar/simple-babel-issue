import React from 'react';


/**
 * A simple Article.
 */
const Article = (props) => {
    //const { List } = ;

    const listItems = props.fields.ArticleContents.map(function (listItem, index) {

        // Types Loop
        switch (listItem.fields.Type.value) {
            //If its heading
            case 'heading':

                //Sub heading
                let subHeading = null;
                if (typeof listItem.fields.SubHeading != 'undefined' && listItem.fields.SubHeading) {
                    subHeading =
                        <h3 class="text-center">
                           
                        </h3>;
                }

                if (typeof listItem.fields.Heading != 'undefined' && listItem.fields.Heading) {

                    return <div>
                        <h1 class="text-center">
                           
                        </h1>
                        {subHeading}
                    </div>;
                }


                break;
            //If its paragraph
            case 'para':
                // Image right posion
                let rightImage = null;
                if (listItem.fields.ImagePostion.value == "right") {
                    rightImage = <br/>;
                }

                // Image left posion
                let leftImage = null;
                if (listItem.fields.ImagePostion.value == "left") {
                    leftImage = <br/>
                }

                if (typeof listItem.fields.ParagraphText != 'undefined' && listItem.fields.ParagraphText) {
                    return (
                        <div class="media">
                            {rightImage}
                            <div class="media-body">                                
                                <p>
                                <br/>
                                </p>                               
                            </div>
                            {leftImage}
                        </div>
                    );
                }
                break;
        }

    });
    return (
        <div class="row article-comp">
            <article>
                {listItems}
            </article>
        </div>

    );
};

export default Article;

console.log("Article feature imported");