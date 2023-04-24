//page can't be manipulated safely until whole document is ready:

//Syntax:
//$(selector).action()
//Example:
//change color of h1 tag to red
// $("h1").css("color", "red")
// //select last list item and see its text:
// //$("li:last").html()
// //returns "Boxer"
// //replace with other text:
// $("li:last").html("<li>German sheperd</li>")

// //difference between .html() and .text() is that text returns just the text, html returns the tags as well

// let design = {
//     color: "blue",
//     background: "green",
//     border: "3px solid black"
// }
// //applies the design styling from the object above:
// $("p").css(design)
// //can also style with attribute function:
// // $("img").attr("border", "5px solid black")

// //.val() returns the value of the first matched element:

// //click(function) - event executed when user clicks on html element:
// $("button").click(function(){
//     alert("Value: " + $("#sometext").val())
// })

// //add class name to element:
// $("button").click(function(){
//     $("body").addClass("styleclass");
// })

// //toggleClass adds and then removes:
// // $("body").removeClass("styleclass");

// // $("button").click(function(){
// //     $("body").toggleClass("styleclass");
// // })

// //hide on click:
// // $("img").click(function(){
// //     $(this).hide();
// // })

// $("p").click(function(){
//     $(this).hide();
// })

// //on function:
// //as soon as start typing in the input, p tag gets hidden:
// $("input").on("keypress", function(){
//     $("p").hide()
// })

//jquery effects:

const projects = {
  "project-one": {
    name: "Puppy Care 101",
    image: "../images/puppycare.png",
    link: "https://www.loom.com/share/c65be23cacf44f48800d57d2fba1aa40",
    problem:
      "Problem: Too many customers are returning their dogs to pet stores.This is causing them to lose money.",
    solution:
      "Solution: An e-learning course so that new dog owners can be more prepared for what puppy care entails, and will therefore be less likely to re-home their pet.",
    color: "#8E7393",
    textcolor: "#8E7393",
    tech: "Articulate Rise",
  },
  "project-two": {
    name: "First-Time Homebuying",
    image: "../images/homebuying.png",
    link: "https://360.articulate.com/review/content/de24286f-891f-46e8-a2c0-1d70f8ca32e1/review",
    problem:
      "Banks needed more people to apply for mortgages and close on homes successfully after the covid housing boom.",
    solution:
      "Solution: An e-learning course that takes you through the most essential parts of house hunting and that guides first-time homebuyers in learning how to land a home successfully.",
    color: "#5B5B4C",
    textcolor: "#5B5B4C",
    tech: "Articulate Storyline",
    },
  "project-three": {
    name: "Newsela Tutorial",
    image: "../images/newsela.png",
    link: "https://video.wixstatic.com/video/87fa6d_88ae8b4a86e1489e88852910404fd947/1080p/mp4/file.mp4",
    problem:
      "Problem: Teachers need an efficient way to assign work to their students on Google Classroom.",
    solution:
      "Solution: An instructional video with step-by-step guidance, walking the learner through the process of assigning work on Newsela.",
    color: "#666",
    textcolor: "#666",
    tech: "Camtasia",
    },
  "project-four": {
    name: "IXL for Beginners",
    image: "../images/ixl.png",
    link: "https://www.loom.com/share/18e74434499c492ea710464154a8eb04",
    problem:
      "Problem: Teachers are not aware of the benefits of the IXL program, and are not utilizing it efficiently.",
    solution:
      "Solution: A live training on the perks of the program and various ways that IXL can support a teacher's practice in the classroom.",
    color: "#97797F",
    textcolor: "#97797F",
    tech: "ILT/VILT",
    },
};

//nav bar responsive functionality:
$(".burger i").click(function () {
  $(".burger i").toggleClass("fa-times");
  $(".nav").toggleClass("nav-active");
});

// function toggleNav(){
//     burger.classList.toggle('fa-bars');
//     burger.classList.toggle('fa-times');
// }
// $("#hero-h2").delay(4000).fadeTo(500, 1);
// $(".hero div a").delay(4000).fadeTo(500, 1);

//map divs to portfolio page:

$.each(projects, function (key, value) {
  let project = $(
    `<div style="border: 25px solid ${value.color};background-color: ${value.color};" class="portfolio-outer-div"><div id=${key} class="project-tiles" style="background-color: ${value.color};"><p style="color: ${value.textcolor}">${value.name}</p><div class="portfolio-image-div"><img src=${value.image} id=${key + "-image"} /><p id=${key + "-problem-solution"}>${value.problem}<br/><br/>${value.solution}</p></div><a href=${value.link} target="_blank" style="background-color: ${value.color}">Learn More</a></div><h1 id=${key + "-headline"}>${value.tech}</h1></div>`
  );
  $(".projects").append(project)
});

$("#project-one-image").hover(function(){
        $(this).fadeOut(750, function(){
            $("#project-one-problem-solution").fadeIn(750);
            $("#project-one-problem-solution").css('opacity', '1');
        });
})

$("#project-one-problem-solution").mouseleave(function(){
    $(this).fadeOut(750, function(){
        $("#project-one-problem-solution").css('opacity', '0');
        $("#project-one-image").fadeIn(750);
    })
})


$("#project-two-image").hover(function(){
    $(this).fadeOut(750, function(){
        $("#project-two-problem-solution").fadeIn(750);
        $("#project-two-problem-solution").css('opacity', '1');
    });
})

$("#project-two-problem-solution").mouseleave(function(){
$(this).fadeOut(750, function(){
    $("#project-two-problem-solution").css('opacity', '0');
    $("#project-two-image").fadeIn(750);
})
})


$("#project-three-image").hover(function(){
    $(this).fadeOut(750, function(){
        $("#project-three-problem-solution").fadeIn(750);
        $("#project-three-problem-solution").css('opacity', '1');
    });
})

$("#project-three-problem-solution").mouseleave(function(){
$(this).fadeOut(750, function(){
    $("#project-three-problem-solution").css('opacity', '0');
    $("#project-three-image").fadeIn(750);
})
})



$("#project-four-image").hover(function(){
    $(this).fadeOut(750, function(){
        $("#project-four-problem-solution").fadeIn(750);
        $("#project-four-problem-solution").css('opacity', '1');
    });
})

$("#project-four-problem-solution").mouseleave(function(){
$(this).fadeOut(750, function(){
    $("#project-four-problem-solution").css('opacity', '0');
    $("#project-four-image").fadeIn(750);
})
})

