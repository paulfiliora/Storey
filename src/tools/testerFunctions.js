//a cleanup collection of functions I used to test things. 


export const writePsetData = () => {
  // const newUserRef = database.ref('users').push();
  // const newUserKey = newUserRef.key;
  // this is hardcoded starter book text

  database.ref('books').push({
    userId: 'XyIlNnJGxTWcphiUOgdoRthG6uH3',
    name: 'Parry Hotter',
    chapters: [{
      ch: 1,
      title: 'Intro',
      text: `Imagine a school in a castle filled with moving staircases, a sport played on flying broomsticks, an evil wizard intent on domination, an ordinary boy who’s the hero of a whole world he doesn’t know. This is the story that comes to life in the marvelous Harry Potter series by J. K. Rowling.

The Dark Lord, Voldemort, tried to murder Harry when he was just a baby—but he failed, killing Harry’s parents but leaving him with a lightning-bolt scar. After Voldemort’s disappearance, Harry is sent to live with his nasty aunt and uncle, far away from any hint of magic. But at the age of eleven, he is invited to attend Hogwarts School of Witchcraft and Wizardry, and a magical world opens before him.

Each of the seven books in the series chronicles one year in Harry’s adventures at Hogwarts and his battle against Lord Voldemort. Harry makes two marvelous best friends named Ron Weasley and Hermione Granger. He studies topics like Transfiguration and Potions under wise headmaster Albus Dumbledore and the malevolent Severus Snape. He becomes expert at a game called Quidditch; encounters incredible creatures like phoenixes and dragons; and discovers an entire Wizarding universe hidden just out of sight, as prone to the darker aspects of human experience as our own, but brightened by a quirky original magic.
And slowly, Harry unravels the mysteries of his original confrontation with Voldemort: why the Dark Lord tried to kill him, how he lived… and what he must do to survive another encounter.

The first Harry Potter book, Harry Potter and the Sorcerer's Stone, was published in the United Kingdom in 1997; a decade later, the last novel, Harry Potter and the Deathly Hallows, broke all records to become the fastest-selling book in history. The seven novels have been translated into sixty-eight languages, selling over four hundred million copies in more than two hundred countries.`
    },
    {
      ch: 2,
      title: 'The WildFire',
      text: `This was the king's semi-barbaric method of administering justice. Its perfect fairness is obvious. The criminal could not know out of which door would come the lady: he opened either he pleased, without having the slightest idea whether, in the next instant, he was to be devoured or married. On some occasions the tiger came out of one door, and on some out of the other. The decisions of this tribunal were not only fair, they were positively determinate: the accused person was instantly punished if he found himself guilty; and, if innocent, he was rewarded on the spot, whether he liked it or not. There was no escape from the judgments of the king's arena.
The institution was a very popular one. When the people gathered together on one of the great trial days, they never knew whether they were to witness a bloody slaughter or a hilarious wedding. This element of uncertainty lent an interest to the occasion which it could not otherwise have attained. Thus, the masses were entertained and pleased, and the thinking part of the community could bring no charge of unfairness against this plan; for did not the accused person have the whole matter in his own hands?

Never before had such a case occurred; never before had a subject dared to love the daughter of a king. In after-years such things became commonplace enough; but then they were, in no slight degree, novel and startling.`
    },
    {
      ch: 3,
      title: 'Bad Juju',
      text: `In the very olden time, there lived a semi-barbaric king, whose ideas, though somewhat polished and sharpened by the progressiveness of distant Latin neighbors, were still large, florid, and untrammelled, as became the half of him which was barbaric. He was a man of exuberant fancy, and, withal, of an authority so irresistible that, at his will, he turned his varied fancies into facts. He was greatly given to self-communing; and, when he and himself agreed upon any thing, the thing was done. When every member of his domestic and political systems moved smoothly in its appointed course, his nature was bland and genial; but whenever there was a little hitch, and some of his orbs got out of their orbits, he was blander and more genial still, for nothing pleased him so much as to make the crooked straight, and crush down uneven places.`
    }]
  }).catch((err) => {
    console.log('Push to DB Failed: ', err);
    return err
  })
}