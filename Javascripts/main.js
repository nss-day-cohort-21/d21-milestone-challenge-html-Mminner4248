console.log("test");


// This let classifier will generate the blog posts set inside the brackets will I set up the for loop lower in the page.

let blogposts = [
    {
        title: "Adventures in Programming",
        text: "Lorem ipsum dolor sit amet, faucibus ac urna eu elit quam integer, quam sed justo, ipsum pellentesque donec neque lacus, placerat mauris. Dui mauris varius proin, dis libero in adipiscing, eu dui maecenas interdum feugiat. Justo eu condimentum consequat libero neque consequat, eu sodales, dolor wisi, gravida tellus, ultrices urna egestas pede in. Turpis augue leo pede non, sodales semper vivamus odio erat lacinia, ut scelerisque, sed nunc fusce, pulvinar lobortis amet ultricies. Accumsan tellus velit sed, amet id eros justo, magna risus, vivamus donec orci metus elit. Nibh vestibulum massa eu tellus, felis wisi id cupiditate, in mauris arcu diam lorem rutrum sit, libero neque vitae nunc. Ut hac, turpis erat maecenas a leo nascetur, a mauris neque. Dui urna in neque etiam eleifend, tempor eu proin phasellus, sed tempor quis, duis sed ut proin est erat, arcu pellentesque. Gravida vulputate phasellus sapien vel ultrices, rutrum lorem et dui mollis vivamus, nisl erat et. Ipsum habitasse, convallis arcu metus vel ullamcorper ultricies, lectus nonummy. Ut amet ut, suspendisse dictumst et tellus, ipsum arcu primis non aliqua dolor ante. Quis nulla, imperdiet fames orci, vitae et, ipsum gravida duis velit vivamus. Ad ipsum, sed sapien. Wisi in ut dapibus vitae, a id, non sagittis placerat, ut libero at id massa amet enim, vel leo.",
        date:"July 12th, 2017"
    },
    {
        title:"Adventures in Programming #2",
        text:"Lorem ipsum dolor sit amet, lacus nibh. Dictumst sagittis lorem sapien morbi maecenas morbi, luctus aliquam luctus auctor metus repudiandae volutpat, dapibus turpis, neque facilisis vel nec, aenean quam. Curabitur taciti euismod tincidunt, nunc porta in mauris erat ante, nonummy pellentesque placerat placerat. Eros quis neque, dignissim in cras non tincidunt tortor. Libero wisi ullamcorper in. In molestie integer sed ultrices eu lacus, lectus non potenti ornare morbi duis, aliquam at elementum, mattis amet enim felis. Nulla ante, at per posuere, assumenda arcu nunc eu, metus arcu vulputate amet quam, mi iaculis sodales. Donec nulla, porta eu egestas. Cras dolor conubia in pharetra ut scelerisque, quam duis, urna adipiscing dui, sit interdum cum orci risus. Id lacus rerum morbi, sodales dolor, pretium lobortis dolor quam hymenaeos. Molestie augue eget, nec quisque ante lectus orci, ante mauris ligula proin rutrum diam, mus quis at phasellus volutpat eu et. Rutrum ut. Molestie amet sunt in, a nunc leo cras nec, adipiscing vitae neque placerat, non mattis et sed mauris. Nulla dignissim eleifend mollis, etiam tristique volutpat, ac at massa orci, donec porro metus felis. Adipiscing nibh a mi pellentesque tempus. Nunc sit. Pede accumsan metus, duis porta dolor varius quam, vitae consectetuer, sodales integer wisi consectetuer ipsum taciti imperdiet. Justo imperdiet condimentum non suspendisse malesuada, felis orci blandit, phasellus parturient, purus vitae porttitor vel. Morbi varius asperiores, a aenean accumsan arcu, tellus vel commodo non. Vulputate suspendisse mauris lacinia velit at sociis.",
        date:"July 13th, 2017"
    },
    {
        title: "Adventures in Programming #3",
        text: "Lorem ipsum dolor sit amet, lacus nibh. Dictumst sagittis lorem sapien morbi maecenas morbi, luctus aliquam luctus auctor metus repudiandae volutpat, dapibus turpis, neque facilisis vel nec, aenean quam. Curabitur taciti euismod tincidunt, nunc porta in mauris erat ante, nonummy pellentesque placerat placerat. Eros quis neque, dignissim in cras non tincidunt tortor. Libero wisi ullamcorper in. In molestie integer sed ultrices eu lacus, lectus non potenti ornare morbi duis, aliquam at elementum, mattis amet enim felis. Nulla ante, at per posuere, assumenda arcu nunc eu, metus arcu vulputate amet quam, mi iaculis sodales. Donec nulla, porta eu egestas. Cras dolor conubia in pharetra ut scelerisque, quam duis, urna adipiscing dui, sit interdum cum orci risus. Id lacus rerum morbi, sodales dolor, pretium lobortis dolor quam hymenaeos. Molestie augue eget, nec quisque ante lectus orci, ante mauris ligula proin rutrum diam, mus quis at phasellus volutpat eu et. Rutrum ut. Molestie amet sunt in, a nunc leo cras nec, adipiscing vitae neque placerat, non mattis et sed mauris. Nulla dignissim eleifend mollis, etiam tristique volutpat, ac at massa orci, donec porro metus felis. Adipiscing nibh a mi pellentesque tempus. Nunc sit. Pede accumsan metus, duis porta dolor varius quam, vitae consectetuer, sodales integer wisi consectetuer ipsum taciti imperdiet. Justo imperdiet condimentum non suspendisse malesuada, felis orci blandit, phasellus parturient, purus vitae porttitor vel. Morbi varius asperiores, a aenean accumsan arcu, tellus vel commodo non. Vulputate suspendisse mauris lacinia velit at sociis.",
        date:"July 14th, 2017"
    }
];

 let blogHolder = document.getElementById("blogContainer");

// the for loop will spit out all the blog posts and stop once it has run through blogposts length.

for (let i = 0; i < blogposts.length; i++){
    //declaring the let varibles that will spit out the let variables by title, name, date form above.
    let blogShow =   `<article>
                     <h3>${blogposts[i].title}</h3>
                     <p>${blogposts[i].text}</p>
                     <p>${blogposts[i].date}</p>
                     </article>`

    blogHolder.innerHTML += blogShow;
};

console.log(blogposts);