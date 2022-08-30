import React from "react";
import { useParams } from "react-router-dom";
import DetailItem from "./DetailItem";

const DUMMY_SERIES = [
  {
    name: "Office",
    director: "Ken Kwapis",
    description:
      "A mediocre paper company in the hands of Scranton, PA branch manager Michael Scott. This mockumentary follows the everyday lives of the manager and the employees he manages. The crew follows the employees around 24/7 and captures their quite humorous and bizarre encounters as they will do what it takes to keep the company thriving.",
    id: "q1",
  },
  {
    name: "The Sopranos",
    director: "David Chase",
    description:
      "When Tony Soprano collapses after suffering a panic attack, he begins therapy with Dr. Jennifer Melfi. Details of Tony's upbringing - including his father's influence on his choice to become a gangster, and Tony's relationship with his mother, Livia, who is vengeful and possibly psychopathic - are revealed. His complicated relationship with his wife Carmela is also explored, along with her feelings regarding her husband's Italian-American Mafia ties. Tony's children Meadow and Anthony Jr. learn about their father's dealings with the Mafia. Later, rumors of a federal investigation leave Tony's crew shaken following a conversation between a member of his organization and the FBI.",
    id: "q2",
  },
  {
    name: "The Wire",
    director: "David Simon",
    description:
      "The streets of Baltimore as a microcosm of the US's war on drugs, and of US urban decay in general. Seen not only through the eyes of a few policemen and drug gang members but also the people who influence and inhabit their world - politicians, the media, drug addicts and everyday citizens.",
    id: "q3",
  },
  {
    name: "Two and a half men",
    director: "Chuck Lorre",
    description:
      "The Harper brothers Charlie and Alan are almost opposites but form a great team. They have little in common except their dislike for their mundane, maternally cold and domineering mother, Evelyn. Alan, a compulsively neat chiropractor and control-freak, is thrown out by his manipulative wife Judith who nevertheless gets him to pay for everything and do most jobs in the house.",
    id: "q4",
  },
  {
    name: "American Psycho",
    director: "Mary Harron",
    description:
      "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
    id: "m1",
  },
  {
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    description:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
    id: "m2",
  },
  {
    name: "Shutter Island",
    director: "Martin Scorsese",
    description:
      "In 1954, up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital. He's been pushing for an assignment on the island for personal reasons, but before long he thinks he's been brought there as part of a twisted plot by hospital doctors whose radical treatments range from unethical to illegal to downright sinister. Teddy's shrewd investigating skills soon provide a promising lead, but the hospital refuses him access to records he suspects would break the case wide open. As a hurricane cuts off communication with the mainland, more dangerous criminals escape in the confusion, and the puzzling, improbable clues multiply, Teddy begins to doubt everything - his memory, his partner, even his own sanity.",
    id: "m3",
  },
  {
    name: "Django Unchained",
    director: "Tarantino",
    description:
      "In 1858, a bounty-hunter named King Schultz seeks out a slave named Django and buys him because he needs him to find some men he is looking for. After finding them, Django wants to find his wife, Broomhilda, who along with him were sold separately by his former owner for trying to escape. Schultz offers to help him if he chooses to stay with him and be his partner. Eventually they learn that she was sold to a plantation in Mississippi. Knowing they can't just go in and say they want her, they come up with a plan so that the owner will welcome them into his home and they can find a way.",
    id: "m4",
  },
];

const Detail = () => {
  const params = useParams();
  const id = params.id;

  const myItem = DUMMY_SERIES.filter((item) => {
    return item.id === id;
  });
  console.log(myItem);
  return (
    <div>
      {myItem.map((item) => {
        return (
          <DetailItem
            name={item.name}
            description={item.description}
            director={item.director}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Detail;
