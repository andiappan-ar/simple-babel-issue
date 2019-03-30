
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