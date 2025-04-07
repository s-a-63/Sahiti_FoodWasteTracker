import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick(1)}>Tab 1</button>
        <button onClick={() => handleTabClick(2)}>Tab 2</button>
        <button onClick={() => handleTabClick(3)}>Tab 3</button>
      </div>

      <div>
        {activeTab === 1 && <p><h1>Let's see how to make tasty <i>Brownies..</i></h1> <h3>Click on Tab 2 for the recipe</h3>
        <img src="https://media.istockphoto.com/id/1255426185/photo/delicious-chocolate-zucchini-brownies.jpg?s=612x612&w=0&k=20&c=xbo8Cj5-h0wxp06Uu6I9tfnvTNlF9aI2IdwHdRMmnyM=" alt="Img of brownie" /></p>}
        {activeTab === 2 && <p><h3><i>Ingredients:</i></h3>
          <ul>
            <li>½ cup butter</li>
            <li>1 cup white sugar</li>
            <li>2 large eggs</li>
            <li>1 teaspoon vanilla extract</li>
            <li>⅓ cup unsweetened cocoa powder</li>
            <li>½ cup all-purpose flour</li>
            <li>¼ teaspoon baking powder</li>
            <li>¼ teaspoon salt</li>
          </ul>
          <br></br><h3><i>Recipe:</i></h3>
          <b>Step 1:</b>
          Preheat the oven to 350 degrees F (175 degrees C). Grease and flour an 8-inch square pan.<br></br>

<b>Step 2:</b>
          Melt 1/2 cup butter in a large saucepan. Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla. Beat in 1/3 cup cocoa, flour, salt, and baking powder. Spread batter into prepared pan.<br></br>

<b>Step 3:</b>
          Bake in the preheated oven until top is dry and edges have started to pull away from the sides of the pan, about 25 to 30 minutes. Let cool briefly before frosting.<br></br>

<b>Step 4:</b>
          To make the chocolate frosting: Combine softened butter, confectioners' sugar, 3 tablespoons cocoa, honey, and 1 teaspoon vanilla extract in a bowl. Stir until smooth. Frost brownies while they are still warm.<br></br>
          <br></br>Head over to Tab 3...


          </p>}
        {activeTab === 3 && <p><br></br>Enjoy your freshly made brownies:)
        <img src="https://media.istockphoto.com/id/168731372/photo/fresh-homemade-chocolate-brownie.jpg?s=612x612&w=0&k=20&c=DOWddwc5EBO7gedFIL7SC5absmtACBOefRRc8YLyh-w=" alt="Img2 of brownie" />
        </p>}
      </div>
    </div>
  );
};

export default TabComponent;
