import React from 'react';
import renderer from 'react-test-renderer';
import ContentItem from "../components/ContentItem";
import TextContent from "../components/TextContent";
//import img1 from "../assets/smoothie1.jpg";

test('render', () => {
    const component = renderer.create(
        <ContentItem
            //forwardRef={this.allRefs.first}
            //image={img1}
            imageRight
        >
            {/*<OurProduct/>*/}
            <TextContent
                column
                title={"Our Products"}
                content={[
                    {
                        subtitle: "Lorem ipsu",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac libero nibh. Morbi condimentum elit non urna pharetra tincidunt et id erat. Maecenas pharetra ante vitae purus sollicitudin, gravida porta elit pellentesque."
                    },
                    {
                        subtitle: "Lorem ipsu",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac libero nibh. Morbi condimentum elit non urna pharetra tincidunt et id erat. Maecenas pharetra ante vitae purus sollicitudin, gravida porta elit pellentesque."
                    }
                ]}
            />
        </ContentItem>
    );
    //jest.mock(component, () => () => 'SomeComponent');
});