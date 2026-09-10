export default function Main() {
    function close(e) {
        let id = e.target.id;
        let hide = document.getElementById(`${id}_content`);
        let rotate = document.getElementById(id);
        let classNames = hide.className;
        let close = classNames.split(" ");

        if (close[close.length - 1] == "show") {
            close[close.length - 1] = "hide";
            rotate.style.transform = "rotate(180deg)";
        } else {
            close[close.length - 1] = "show";
            rotate.style.transform = "rotate(0deg)";
        }

        let newClass = "";
        for (let i = 0; i < close.length; i++) {
            if (i < close.length - 1) {
                newClass += close[i] + " ";
            } else {
                newClass += close[i];
            }
        }

        hide.className = newClass;
        console.log(hide.className);
    }
    return (
        <>
            {/* Quote Section */}
            <aside className="w-8/12 m-auto text-white mb-10">
                <p>
                    "I will stop your bleeding. Humans are so fragile.
                    However... if you bleed to death... or if his lordship
                    doesn't approve of you... and you die... then death was
                    always your fate. In that case... you were no greater a man
                    than that. Don't you... agree?”
                </p>
                <small>
                    — Kokushibo to Muichiro Tokito before turning his attention
                    to Genya Shinazugawa in True Feelings
                </small>
            </aside>
            <main className="w-8/12 border-black border-6 bg-koku-purple m-auto p-10 text-white grid grid-cols-1 gap-10">
                {/* Image and Main Description Section */}
                <section className="grid grid-cols-2 gap-x-2">
                    <div className="w-4/5 m-auto">
                        <div>
                            <p className="bg-black text-white text-center text-lg font-comic">
                                Kokushibo
                            </p>
                        </div>
                        <img
                            src="../src/assets/Kokushibo_back_facing.webp"
                            alt="Anime Kokushibo facing back"
                            className="border-3 border-black bg-koku-dark-purple"
                            width="100%"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-1 h-4/5">
                        <p className="text-sm">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kokushibo
                            (黒こく死し牟ぼう Kokushibō?) is a major supporting
                            antagonist of Demon Slayer: Kimetsu no Yaiba. He is
                            a demon affiliated with the Twelve Kizuki, holding
                            the highest position, Upper Rank One
                            (上じょう弦げんの壱いち Jōgen no Ichi?).
                        </p>
                        <p className="text-sm">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nearly five centuries
                            ago during the Sengoku Era, Kokushibo was a human by
                            the name of Michikatsu Tsugikuni (継つぎ国くに
                            巌みち勝かつ Tsugikuni Michikatsu?), a former Demon
                            Slayer, and the older twin brother of Yoriichi
                            Tsugikuni, the strongest Demon Slayer to ever live.
                        </p>
                        <p className="text-sm">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kokushibo is also the
                            ancestor of Muichiro Tokito and Yuichiro Tokito, and
                            is responsible for turning Zenitsu Agatsuma's
                            senior, Kaigaku, into a demon, who then defected to
                            the Twelve Kizuki as the new Upper Rank Six.
                        </p>
                    </div>
                </section>
                {/* Table Section */}
                <section className="grid grid-cols-1 gap-y-2">
                    <div className="grid grid-cols-2 gap-x-2">
                        <table>
                            <tr className="text-center bg-black text-lg">
                                <th colSpan={4}>Names</th>
                            </tr>
                            <tr className="bg-koku-dark-purple">
                                <th>Kanji</th>
                                <th>Rōmaji</th>
                                <th>Alias</th>
                                <th>Race</th>
                            </tr>
                            <tr>
                                <td>
                                    <p>黒死牟 (Demon)</p>
                                    <p>継国 巌勝 (Human)</p>
                                </td>
                                <td>Kokushibō</td>
                                <td>
                                    <p>Michikatsu Tsugikuni (Human Name)</p>
                                    <p>Secretary Kokushibo (Kimetsu Academy)</p>
                                </td>
                                <td>
                                    <p>Demon</p>
                                    <p>Human (Formerly)</p>
                                </td>
                            </tr>
                        </table>
                        <table>
                            <tr className="text-center bg-black text-lg">
                                <th colSpan={3}>Affiliation</th>
                            </tr>
                            <tr className="bg-koku-dark-purple">
                                <th>Affiliation</th>
                                <th>Occupation</th>
                                <th>Combat Style</th>
                            </tr>
                            <tr>
                                <td>
                                    <p>Demon Slayer Corps (Formerly)</p>
                                    <p>Twelve Kizuki</p>
                                </td>
                                <td>
                                    <p>Samurai (Formerly)</p>
                                    <p>Demon Slayer (Formerly)</p>
                                </td>
                                <td>Moon Breathing</td>
                            </tr>
                        </table>
                    </div>
                    <table>
                        <tr className="text-center bg-black text-lg">
                            <th colSpan={7}>Characteristics</th>
                        </tr>
                        <tr className="bg-koku-dark-purple">
                            <th>Race</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Height</th>
                            <th>Weight</th>
                            <th>Hair Color</th>
                            <th>Eye Color</th>
                        </tr>
                        <tr>
                            <td>
                                <p>Demon</p>
                                <p>Human (Formerly)</p>
                            </td>
                            <td>Male</td>
                            <td>
                                <p>17-24 (Human)</p>
                                <p>&lt; 480 (Chronologically)</p>
                            </td>
                            <td>190 cm (6'3")</td>
                            <td>93 kg (205 lb)</td>
                            <td>Black with Red Tips</td>
                            <td>
                                <p>Maroon (Human)</p>
                                <p>Gold with Red Sclera (Demon)</p>
                            </td>
                        </tr>
                    </table>

                    <div className="grid grid-cols-2 gap-x-2">
                        <table>
                            <tr className="text-center bg-black text-lg">
                                <th colSpan={2}>Debuts</th>
                            </tr>
                            <tr className="bg-koku-dark-purple">
                                <th>Manga Debut</th>
                                <th>Anime Debut</th>
                            </tr>
                            <tr>
                                <td>
                                    <p>Chapter 98 (Partial Appearance)</p>
                                    <p>Chapter 99 (Full Appearance)</p>
                                </td>
                                <td>Episode 45</td>
                            </tr>
                        </table>
                        <table>
                            <tr className="text-center bg-black text-lg">
                                <th colSpan={3}>Portrayal</th>
                            </tr>
                            <tr className="bg-koku-dark-purple">
                                <th>Japanese VA</th>
                                <th>English VA</th>
                                <th>Stage Play</th>
                            </tr>
                            <tr>
                                <td>Ryōtarō Okiayu</td>
                                <td>Jonah Scott</td>
                                <td>Kazuki Kato</td>
                            </tr>
                        </table>
                    </div>
                    <table>
                        <tr className="text-center bg-black text-lg">
                            <th colSpan={2}>Personal Status</th>
                        </tr>
                        <tr className="bg-koku-dark-purple">
                            <th>Status</th>
                            <th>Relatives</th>
                        </tr>
                        <tr>
                            <td>Deceased</td>
                            <td>
                                <p>Unnamed Father</p>
                                <p>Akeno Tsugikuni (Mother)</p>
                                <p>Yoriichi Tsugikuni (Younger Twin Brother)</p>
                                <p>Unnamed Wife</p>
                                <p>Two Unnamed Children</p>
                                <p>Muichiro Tokito (Descendant)</p>
                                <p>Yuichiro Tokito (Descendant)</p>
                                <p>Uta (Sister-in-Law)</p>
                            </td>
                        </tr>
                    </table>
                </section>
                {/* Appearance Section */}
                <section className="grid grid-cols-1 gap-2">
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Appearance</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Appearance"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-2 show"
                        id="Appearance_content"
                    >
                        <p className="text-sm">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kokushibo is a tall
                            man of muscular build and pale skin complexion. He
                            possesses long, spiky black hair with red tips that
                            he kept in a ponytail, along with two
                            shoulder-length, flowing, wavy bangs on each side
                            that reached to his collarbone. His most notable
                            features are the three sets of eyes on his face with
                            yellow irises and red flesh sclera that have black,
                            straight lines diverging from each iris. His middle
                            set of eyes have the kanji of "Upper Rank
                            (上じょう弦げん Jōgen?)" on engraved on his left
                            eye, and daiji for "One (壱いち Ichi?)" on his
                            right. His other sets of eyes feature black pupils
                            and a cracked pattern in the irises. His top set of
                            eyes replaced his eyebrows. Kokushibo also possesses
                            flame-like Demon Slayer Marks on the top left side
                            of his forehead that extended down to his left
                            temple, and the bottom right of his cheek that
                            extended down to his neck. His appearance was
                            described as profound and majestic by Muichiro
                            Tokito.
                        </p>
                        <p className="text-sm">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kokushibo adorned a
                            purple-and-black hexagonal-patterned nagagi kimono
                            and black umanori-styled hakama pants tied with a
                            white uwa-obi. He also wore a pair of zōri with
                            purple straps, and white tabi socks. He carried a
                            fleshy katana at his waist that has eyes in the
                            space between the tsuka ito wrapping of the handle
                            of his sword. The tsuba and blade were shown to have
                            eyes and veins. The scabbard was also fleshy in
                            appearance.
                        </p>
                        <p className="text-sm">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a human,
                            Kokushibo's look was almost identical to his demon
                            form, except for the number of eyes, his eminent
                            eyebrows, and his less paler skin. His eyes had
                            maroon irises and normal, white sclera. As a child,
                            he was normally seen wearing a white kimono, as
                            opposed to the purple-and-black-patterned one he's
                            seen wearing as an adult. He also tied his hair in a
                            short ponytail, unlike Yoriichi, who wore his loose.
                        </p>
                        <p className="text-sm">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due to being identical
                            twins, Kokushibo greatly resembled his younger
                            brother Yoriichi. However, besides their clothing,
                            the biggest way to distinguish the twins was their
                            hair texture; Kokushibo has spikier and thicker hair
                            in comparison to his brother's thinner and curlier
                            hair.
                        </p>
                        <p className="text-sm">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After being beheaded
                            by Sanemi Shinazugawa and Gyomei Himejima, Kokushibo
                            evolved into a more grotesque and monstrous form,
                            with protruding fangs and mandibles, large, uneven
                            white horns on the front and back of his head,
                            pointed nails, and red outgrowths on his face. His
                            eyes were looking in multiple directions, and his
                            hair was shorter and messier. He had several thin
                            tubes poking out of his body and pinkish-red
                            tendrils on his back, along with numerous black and
                            red scorpion tail-like appendages haphazardly
                            sprouting all across his entire body.
                        </p>
                    </div>
                </section>
                {/* Gallery Section */}
                <section>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Gallery</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Gallery"
                            />
                        </div>
                        <hr className=" border-2 text-black mb-2" />
                    </div>
                    <div
                        className="grid grid-cols-3 gap-x-2 gap-y-5"
                        id="Gallery_content"
                    >
                        <div>
                            <img
                                src="./src/assets/human_koku.webp"
                                alt="Human child Kokushibo"
                                className="h-60 m-auto border-3 border-black"
                            />
                            <p className="m-auto">
                                Kokushibo's appearance as a human child.
                            </p>
                        </div>
                        <div>
                            <img
                                src="./src/assets/human_adult_koku.webp"
                                alt="Human adult Kokushibo"
                                className="h-60 m-auto border-3 border-black"
                            />
                            <p className="m-auto">
                                Kokushibo's appearance with his Demon Slayer
                                Mark as an adult human.
                            </p>
                        </div>

                        <div>
                            <img
                                src="./src/assets/koku_anime_full.webp"
                                alt="Anime full body Kokushibo"
                                className="h-60 m-auto border-3 border-black"
                            />
                            <p className="m-auto">
                                Kokushibo's full appearance as a demon.
                            </p>
                        </div>

                        <div>
                            <img
                                src="./src/assets/koku_blades.webp"
                                alt="Kokushibo with several blades coming out of his body"
                                className="h-60 m-auto border-3 border-black"
                            />
                            <p className="m-auto">
                                Kokushibo's appearance with dozens of katanas
                                protruding from his body.
                            </p>
                        </div>

                        <div>
                            <img
                                src="./src/assets/koku_monster.webp"
                                alt="Kokushibo's monster form"
                                className="h-60 m-auto border-3 border-black"
                            />
                            <p className="m-auto">
                                Kokushibo's appearance after undergoing a
                                post-decapitation transformation.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Personality Section */}
                <section className="grid grid-cols-1 gap-2">
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Personality</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Personality"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-3 show"
                        id="Personality_content"
                    >
                        <p>
                            <div className="float-right m-3 w-60">
                                <img
                                    src="./src/assets/koku_sit.webp"
                                    width="200px"
                                    alt=""
                                    className="m-auto border-3 border-black"
                                />
                                <small className=" m-auto text-black">
                                    Kokushibo's stoic and reserved disposition.
                                </small>
                            </div>
                            Kokushibo is reserved, silent, and aloof,
                            maintaining an aura of unnerving tranquility and
                            mystery that complemented his position as Upper Rank
                            One. He rarely spoke; when he did, he talked in a
                            slow and emphatic manner that gave more gravitas and
                            authority to his words. He is an adamant, punctual
                            rule-follower and shows deep respect to the
                            hierarchy of the Twelve Kizuki, as seen during the
                            Upper Ranks Meeting. Kokushibo is shown to be humble
                            as well, and is not hesitant to admit his failure or
                            complain of any difficulty. He demonstrates
                            unwavering loyalty towards Muzan Kibutsuji, carrying
                            out his actions solely to fulfill his objectives.
                            However, his outward displayed of reservation,
                            dignity, and humility hide a cold and unforgiving
                            side to his personality. When reprimanding
                            individuals, his words are harsh and firm, bordering
                            on cruel and disdainful, and his threats were severe
                            and demand absolute obedience.
                        </p>
                        <p>
                            Kokushibo is shown to be genuinely delighted when
                            the opponents he faced challenged him, such as
                            helping dress Muichiro Tokito's amputated hand over
                            his talented swordsmanship, praising Gyomei Himejima
                            and Sanemi Shinazugawa for their unparalleled human
                            abilities, and sparing Akaza because he enjoyed the
                            challenge of battling him. It is also worth noting
                            that the only time the demon visibly smiled was when
                            he examined the Stone Hashira's impeccably strong
                            physique, in genuine awe at his strength and showing
                            excitement at the prospect of facing a warrior of
                            extremely high caliber. However, due to this
                            selective respect for those he considered worthy, he
                            also felt irritation after he realized Akaza had
                            died by suicide, and he pities Gyomei for his
                            impending death from unlocking his Demon Slayer
                            Marks.
                        </p>
                        <p>
                            <div className="float-left m-3 w-60">
                                <img
                                    src="./src/assets/koku_angry.webp"
                                    width="200px"
                                    alt=""
                                    className="m-auto border-3 border-black"
                                />
                                <small className="m-auto text-black">
                                    Kokushibo curses Akaza for his
                                    self-inflicted death.
                                </small>
                            </div>
                            Having abandoned his humanity in the pursuit of
                            strength, Kokushibo shows a scornful view on humans
                            and their values. Following Akaza's self-inflicted
                            defeat, he derided him as "exceedingly weak" for
                            abandoning his existence as a demon to reconcile
                            with his lost humanity in death. He mocks Gyomei for
                            expressing indifference at the curse of the Demon
                            Slayer Mark, believing his rejection of his fate was
                            a foolish notion, and he later taunted him and
                            Sanemi when they ripped off his kimono in an attempt
                            to attack him, deriding their efforts as "not even
                            enough to kill an infant". He also showed no
                            tolerance for Genya Shinazugawa's ability to gain
                            the power of demons by consuming them, calling the
                            boy an "imitation demon" that he could not let live.
                            He shows something of warmth towards his descendant,
                            Muichiro, commending his skills and resolve and
                            being moved to offer Muichiro a chance to become a
                            demon. When their battle comes to an end, Kokushibo
                            expresses regret at having struck down his
                            descendant. At the same time, he refers to Muichiro
                            and his abilities as the natural result of his cells
                            being passed down.
                        </p>
                        <p>
                            <div className="float-right w-60">
                                <img
                                    src="./src/assets/koku_talk.webp"
                                    width="200px"
                                    alt=""
                                    className="m-auto border-3 border-black"
                                />
                                <small className="m-auto text-black">
                                    Kokushibo reveals Gyomei's forthcoming death
                                    to persuade him into becoming a demon.
                                </small>
                            </div>
                            Throughout his life, Kokushibo is shown to be a man
                            that greatly values the concept of legacy. As a
                            human, he told his brother that since there were no
                            skilled warriors comparable to them, their Breathing
                            Styles would disappear without successors, before
                            becoming irritated at Yoriichi's optimistic
                            indifference. When he realized that those that had
                            awakened their Demon Slayer Mark died before
                            reaching the age of 25 and grew worried that he was
                            without a future, he accepted Muzan's offer to
                            become a demon to further perfect his techniques.
                            Even as a demon, this is shown when he is pleased
                            that his lineage lived on through Muichiro, and he
                            tells Gyomei that his body and techniques would go
                            to waste because of his mark in an attempt to accept
                            becoming a demon. Additionally, in his clash against
                            him, the demon's banter suggested that he feared
                            death; when Gyomei's marks appear, Kokushibo
                            preemptively bemoans the loss of a talented fighter,
                            and he urges him to become a demon to continue
                            honing his skills. He seemed surprised when Gyomei
                            vehemently rejected his offer and called his
                            mentality pathetic.
                        </p>
                        <p>
                            <div className="float-left m-3 w-60">
                                <img
                                    src="./src/assets/koku_rage.webp"
                                    width="200px"
                                    alt=""
                                    className="m-auto border-3 border-black"
                                />
                                <small className="m-auto text-black">
                                    Kokushibo growing immensely envious of
                                    Yoriichi.
                                </small>
                            </div>
                            He possessed a complex relationship with his human
                            past. It is revealed that, as a human, Kokushibo,
                            then Michikatsu, pitied Yoriichi during the period
                            of time when he was mute, viewing him as a meek and
                            callow boy dependent on his mother. He gifted him a
                            flute to use when he needed his brother, and smiled
                            at him despite being bruised from his father's
                            beatings. However, he later harbored an immense
                            sense of envy towards his younger twin brother for
                            his natural talent and incredible abilities. These
                            feelings of jealousy and contempt only became
                            stronger upon seeing his brother become a peerless
                            warrior of unmatched caliber among even the Demon
                            Slayer Corps, with none of the Hashira coming close
                            to his level of strength.
                            <br />
                            <br />
                            This fostered a drive to become as strong or surpass
                            his brother, a sentiment so strong that he abandoned
                            his family to pursue becoming a Demon Slayer, and
                            later, into a demon. His envy peaked when he
                            discovers that Yoriichi is still alive and in old
                            age, completely surpassing the curse of the Demon
                            Slayer Marks that killed anyone that awakened them
                            before they turned 25. Even centuries later,
                            Yoriichi's immunity to the curse haunted Kokushibo,
                            and the usually phlegmatic demon would become
                            rattled when Gyomei inadvertently reminded him of
                            Yoriichi by accusing him of lying about the curse
                            having no exceptions, which prompted him to attack.
                        </p>
                        <p>
                            <div className="float-right w-60">
                                <img
                                    src="./src/assets/koku_cry.webp"
                                    width="200px"
                                    alt=""
                                    className="m-auto border-3 border-black"
                                />
                                <small className="m-auto text-black">
                                    Kokushibo breaking down at the realization
                                    of his brother's love for him.
                                </small>
                            </div>
                            However, despite this immense jealousy, spite, and
                            outright hatred he harbors for Yoriichi, he still
                            deeply cared for his brother, as seen when he was
                            touched by Yoriichi treasuring the handmade flute he
                            had made for him as a child; Kokushibo shedded tears
                            over his brother's death, and went as far as keeping
                            the flute itself for the following centuries as a
                            memento.
                            <br />
                            <br />
                            Kokushibo's fear of defeat stemmed from his
                            inferiority complex and desire for strength. This
                            fear caused him to become increasingly aggressive
                            and desperate in battle, relying on his demon
                            powers, and even killing and dismembering Muichiro
                            despite his earlier to desire to turn him into a
                            demon. However, as he faced off against the Hashira,
                            Kokushibo realized the heavy cost of his pursuit of
                            strength. Becoming a grotesque monster, far from his
                            idealized vision of becoming the strongest samurai,
                            highlighted how much his ambitions and resentment
                            have twisted him.
                            <br />
                            <br />
                            In his final moments, he was filled with sorrow and
                            rage, lamenting his life choices upon seeing he
                            hasn't achieved his goals and questioning if the
                            path he chose was truly the right one. He realized
                            that his desire for a legacy had been for naught and
                            he had ended up accomplishing nothing in his
                            centuries of existence. As he disintegrated,
                            Kokushibo highlights that he just wanted to become
                            as strong and honoured like Yoriichi, showing that
                            who he despised the most was also someone he looked
                            to as an idealized paragon to shape his life by. In
                            the end, he angrily asked his deceased brother why
                            he couldn't leave anything behind, why he couldn't
                            become anyone, why were they different, and why he
                            was even born, expressing his frustration at not
                            achieving his desires.
                        </p>
                    </div>
                </section>
                {/* Abilities Section */}
                <section className="grid grid-cols-1 gap-2">
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Abilities</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Abilities"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div className="show" id="Abilities_content">
                        {/* Overall Abilities */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Overall Abilities
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Overall"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Overall_content"
                            >
                                <p>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/koku_hand.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo casually slashes off a
                                            marked Muichiro's arm before he
                                            could react.
                                        </small>
                                    </div>
                                    As the highest-ranking member of the Twelve
                                    Kizuki, Kokushibo is an extraordinarily
                                    powerful demon, second only to the Demon
                                    King Muzan Kibutsuji himself. He has battled
                                    countless Demon Slayers and amassed vast
                                    experience and knowledge over his nearly
                                    500-year-long life. His abilities are
                                    refined to the highest level, as he is not
                                    only a master of Total Concentration
                                    Breathing, but also a marked individual who
                                    has gained access to the Transparent World,
                                    as well as the demon that possesses the
                                    highest concentration of Muzan's blood
                                    amongst the Upper Ranks. <br />
                                    <br />
                                    His overwhelming power is first displayed
                                    when he slashes off the hand of Upper Rank
                                    Three, Akaza, before he could even react,
                                    and it is later stated by Doma that Akaza
                                    would never be able to surpass the both of
                                    them despite having improved his skills for
                                    113 years prior to their meeting. During his
                                    battle in the Infinity Castle, Kokushibo
                                    effortlessly overwhelms the Mist Hashira,
                                    Muichiro Tokito, a prodigious Demon Slayer
                                    who singlehandedly defeated Upper Rank Five
                                    and had awakened his Demon Slayer Mark
                                    mid-battle. Later in the clash, he easily
                                    slices off Muichiro's hand before he can
                                    react and is able to catch his sword
                                    mid-swing, before proceeding to stab him
                                    with it.
                                </p>
                                <p>
                                    Genya Shinazugawa, who played a major role
                                    in the defeat of Upper Rank Four, also stood
                                    no chance against him and was sliced to
                                    pieces without resistance. Although the Wind
                                    Hashira, Sanemi Shinazugawa, was able to
                                    fare better than the former two due to his
                                    greater experience and capabilities, he too
                                    is quickly overpowered when Kokushibo exerts
                                    himself slightly, making deep cuts all over
                                    the Hashira's body. Even when Gyomei
                                    Himejima arrived and momentarily stalled the
                                    battle with his own tremendous power and
                                    potent weaponry, Kokushibo was able to force
                                    the Stone Hashira to use his Demon Slayer
                                    Mark. Furthermore, Kokushibo could
                                    simultaneously hold back Gyomei and Sanemi,
                                    even when the latter also awakened his own
                                    Demon Slayer Mark.
                                </p>
                                <p>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/koku_moons.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className="m-auto text-black">
                                            Kokushibo simultaneously holds off
                                            three marked Hashira with a single
                                            technique.
                                        </small>
                                    </div>
                                    Once he utilizes an enhanced version of his
                                    katana, it ultimately took the combined
                                    effort and full abilities of all four Demon
                                    Slayers, the three Hashira with their marks
                                    and Genya empowered with a portion of
                                    Kokushibo's own power, to even land a
                                    significant injury on him. Moreover, Gyomei
                                    and Muichiro also needed to see into the
                                    Transparent World. Nonetheless, the only way
                                    that the Demon Slayers could win was to
                                    immobilize him, which took the lives of
                                    Muichiro and Genya, the former sacrificing
                                    himself to leave Kokushibo in the open and
                                    the latter needing to utilize a new Blood
                                    Demon Art to restrain the Upper Rank. Even
                                    then, the Demon Slayers were still met with
                                    resistance due to Kokushibo's very high
                                    durability and needed to turn their blades
                                    bright red in order to behead him.
                                    <br />
                                    <br />
                                    Despite everything that they did, Kokushibo
                                    manages to regrow his head through sheer
                                    will, making him virtually invincible with
                                    the exception of the sun. In the end, along
                                    with a momentary lapse in his concentration
                                    due to seeing the extent of his pursuit of
                                    further strength transforming him into a
                                    grotesque monster, it required Muichiro's
                                    bright red blade burning Kokushibo's body
                                    from the inside, Genya's Blood Demon Art
                                    siphoning off enough of his blood to prevent
                                    him from healing and using a technique, and
                                    a joint effort by Sanemi and Gyomei using
                                    their bright red weapons to behead and
                                    destroy his body, to finally defeat the
                                    strongest member of the Twelve Kizuki.
                                </p>
                                <p>
                                    All in all, Kokushibo's defeat required the
                                    combined efforts of three powerful marked
                                    Hashira, the usage of the Transparent World
                                    and Bright Red Blades, and a Demon Slayer
                                    capable of using a Blood Demon Art. Even
                                    then, the battle was narrowly won and cost
                                    the lives of Muichiro and Genya, a feat that
                                    truly exemplifies the might of Upper Rank
                                    One.
                                </p>
                                <p>
                                    <strong>Immense Willpower:</strong> Stemming
                                    solely from his goal to surpass his younger
                                    twin brother Yoriichi, Kokushibo possesses
                                    tremendous willpower and an indomitable
                                    spirit. Despite his decapitation at the
                                    hands of Gyomei and Sanemi, he forced his
                                    regeneration to evolve and regrew his own
                                    head, all because he didn't allow himself to
                                    die until he accomplished his goal.[26]
                                </p>
                                <p>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/koku_suprise.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo correctly identifying
                                            Muichiro's Breathing Style just
                                            after witnessing one attack.
                                        </small>
                                    </div>
                                    <strong>Tactical Intellect:</strong> As a
                                    talented swordsman who had existed for
                                    nearly five centuries, Kokushibo has
                                    experienced countless battle situations and
                                    threats, which he had learned to overcome.
                                    This was displayed during his battle with
                                    three marked Hashira and a demon-enhanced
                                    Demon Slayer, where he was able to adapt to
                                    their unique fighting styles and tactics
                                    almost instantly after witnessing it. After
                                    Muichiro unleashed his first attack against
                                    the Upper Rank, he was able to determine he
                                    was a user of Mist Breathing. This was
                                    further accentuated through Kokushibo being
                                    able to take on Sanemi and Gyomei
                                    simultaneously despite both of them being
                                    marked and being users of different
                                    Breathing Styles, showing that he was
                                    capable of understanding two vastly
                                    different opponents at once in the heat of
                                    battle.
                                </p>
                            </div>
                        </section>
                        {/* Demon Abilities */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Demon Abilities
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Demon"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Demon_content"
                            >
                                <p>
                                    <strong>Biological Absorption:</strong>
                                    Kokushibo possessed the ability to absorb
                                    human and demon bodies through physical
                                    contact. Although this trait had never been
                                    displayed, it was stated that Kokushibo
                                    would absorb the demons that challenged him
                                    and were defeated. He presumably used this
                                    method as a faster alternative of consuming
                                    humans as well.
                                </p>
                                <p>
                                    <strong>Flesh Manipulation:</strong> Like
                                    all demons, Kokushibo possesses the ability
                                    to manipulate his own flesh to a high
                                    degree. In terms of changing his body, could
                                    can alter his face to posses two more pairs
                                    of eyes while also elongating his forehead.
                                    Most notoriously, he used this ability to
                                    create an extremely durable and sharp
                                    katana, complete with a tsuba, a tsuka, and
                                    its own scabbard. Because of this, his
                                    katana could never be destroyed, as he can
                                    regenerate it like he would with normal
                                    wounds. He also displayed the ability to
                                    grow and protrude dozens of blades from his
                                    body, allowing him to perform a multitude of
                                    slashes from them without a swinging motion.
                                    From its activation alone, Kokushibo not
                                    only managed to blow away Sanemi and Gyomei,
                                    but he also sliced apart Muichiro, Genya,
                                    the trees from Genya's Blood Demon Art
                                    rooting him down, and numerous pillars in
                                    his surroundings. After being decapitated,
                                    Kokushibo greatly morphed his body to adopt
                                    a more beastly and grotesque appearance,
                                    with growing appendages, thin tubes, sharp
                                    mandibles, and horns.
                                </p>
                                <ul className="ml-10">
                                    <li className="list-disc">
                                        <div className="float-right m-3 w-60">
                                            <img
                                                src="./src/assets/koku_katana.webp"
                                                width="200px"
                                                alt=""
                                                className="m-auto border-3 border-black"
                                            />
                                            <small className=" m-auto text-black">
                                                Kokushibo's katana's altered
                                                appearance.
                                            </small>
                                        </div>
                                        <strong>Sword Manipulation:</strong> Due
                                        to his katana being made of his own
                                        living flesh, Kokushibo was able to
                                        easily regenerate parts of the blade
                                        should it be destroyed or damaged, which
                                        was shown numerous times when the blade
                                        returns to its original shape when
                                        Gyomei or Sanemi damaged it with their
                                        attacks. Furthermore, he could freely
                                        manipulate the shape of the blade, as
                                        shown when he grew three additional
                                        blades from the original blade to
                                        increase its reach and size, turning it
                                        into a weapon similar to a Shichishito
                                        or seven-branched sword.
                                    </li>
                                </ul>
                                <p>
                                    <strong>Immense Regeneration:</strong>{" "}
                                    Kokushibo possesses one of the most powerful
                                    regenerative abilities in existence, second
                                    only to the Demon King, Muzan Kibutsuji. His
                                    regeneration speed was even faster than
                                    Akaza and Doma, regrowing his ear and right
                                    shoulder almost instantaneously.
                                </p>
                                <ul className="grid grid-cols-1 gap-2 ml-10">
                                    <li className="list-disc">
                                        <strong>Decapitation Immunity:</strong>{" "}
                                        After being decapitated by two marked
                                        Hashira, Kokushibo, through sheer force
                                        of will, was able to regenerate his
                                        entire head and successfully conquer
                                        death from a decapitation via Nichirin
                                        Swords, a feat considered impossible for
                                        demons and only accomplished by two
                                        other demons: Akaza and the Demon King
                                        himself. However, while the speed at
                                        which he regrew his head was far faster
                                        than the former, his regeneration after
                                        being decapitated became unstable,
                                        causing him to take on a monstrous
                                        visage. In this state, he was only
                                        killed after being decapitated once more
                                        due to his inability to use any
                                        technique with his lack of blood or heal
                                        properly.
                                    </li>
                                    <li className="list-disc">
                                        <strong>
                                            Monstrous Transformation:{" "}
                                        </strong>
                                        After regrowing his head while battling
                                        Gyomei and Sanemi, Kokushibo undergoes a
                                        transformation that causes him to take
                                        on a more monstrous and grotesque form,
                                        with protruding fangs and mandibles,
                                        large white horns on the front and back
                                        of his head, pointed nails, red
                                        outgrowths on his face, several thin
                                        tubes poking out of his body, and
                                        numerous black and red scorpion
                                        tail-like appendages haphazardly
                                        sprouted all across his entire body.
                                        Kokushibo stated that any attacks thrown
                                        at him in this state would be
                                        meaningless, and that the sun would be
                                        the only way to defeat him.
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* Demon Slayer Abilities */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Demon Slayer Abilities
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Slayer"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Slayer_content"
                            >
                                <p>
                                    <strong>Demon Slayer Mark: </strong>
                                    Kokushibo awakened his Mark when he trained
                                    under Yoriichi. The Demon Slayer Mark
                                    drastically improves the abilities of an
                                    individual, making them much stronger and
                                    faster than what they could achieve
                                    normally, though at the cost of being cursed
                                    to die at the age of 25. However, by turning
                                    into a demon and gaining immortality,
                                    Kokushibo was no longer bounded by the
                                    curse.
                                </p>
                                <ul className="ml-10">
                                    <li className="list-disc">
                                        <div className="float-right m-3 w-60">
                                            <img
                                                src="./src/assets/koku_gyomei.webp"
                                                width="200px"
                                                alt=""
                                                className="m-auto border-3 border-black"
                                            />
                                            <small className=" m-auto text-black">
                                                Kokushibo discerns Gyomei's
                                                strength by analyzing his
                                                anatomy.
                                            </small>
                                        </div>
                                        <strong>Transparent World: </strong>
                                        Kokushibo has the ability to access the
                                        Transparent World, allowing him to see
                                        the muscles, blood flow, and joint
                                        movements of his opponents, as well as
                                        accurately predict and anticipate their
                                        movements and attacks. Through this
                                        ability, he was able to identify
                                        Muichiro as his descendant, immediately
                                        discern that Genya consumed demons to
                                        gain strength, as well as determine
                                        Muichiro, Sanemi, and Gyomei's strength,
                                        even being able to tell that the latter
                                        two's bodies and techniques are at their
                                        peak.
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* Physical Abilities */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Physical Abilities
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Physical"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Physical_content"
                            >
                                <p>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/koku_kirk.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            A marked Sanemi barely making a cut
                                            in Kokushibo's neck with his
                                            Nichirin sword.
                                        </small>
                                    </div>
                                    <strong>Immense Durability: </strong>Due to
                                    having an extremely high concentration of
                                    Muzan's blood, Kokushibo possessed
                                    incredibly high durability. His neck was so
                                    resistant that a marked Sanemi barely
                                    succeeded in cutting him despite swinging
                                    his sword with all his might. Furthermore,
                                    Gyomei's massive spiked iron ball was
                                    similarly ineffective in damaging his neck,
                                    despite the Stone Hashira slamming his flail
                                    on Kokushibo's neck from above. Even when a
                                    marked Sanemi slammed his katana down onto
                                    Gyomei's spiked iron ball, the Demon Slayers
                                    only successfully sliced off Kokushibo's
                                    head when both of their weapons turned
                                    bright red.
                                </p>
                                <p>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/koku_arm.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo slicing off Genya's arm so
                                            fast he appears not to move.
                                        </small>
                                    </div>
                                    <strong>Immense Speed & Reflexes: </strong>
                                    Kokushibo possesses immense levels of speed
                                    far surpassing that of the other Upper
                                    Ranks, as first shown when he slashes off
                                    Akaza's arm before he, or any of the other
                                    demons present, realized. Later on, when he
                                    departs from the Upper Rank Meeting
                                    following his reprimanding of Akaza,
                                    Kokushibo appeared as if he wisped out of
                                    view. He displays his phenomenal speed on
                                    multiple occasions while fighting. Firstly,
                                    he is able to effortlessly outpace
                                    Muichiro's Mist Breathing form, with
                                    Muichiro even remarking that Kokushibo's
                                    speed was phenomenal compared to his own,
                                    despite his abilities being amplified by his
                                    Demon Slayer Mark. When Genya fired his
                                    shotgun at the Upper Rank from a distance,
                                    Kokushibo is able to suddenly appear behind
                                    him before the pellets could reach where he
                                    initially was, before slicing his arm off
                                    the moment he arrived. He then draws his
                                    blade and slashes off his other arm and his
                                    torso so quickly, his hand didn't even
                                    appear to move.
                                </p>
                                <p>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/koku_own.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo simultaneously out-speeds
                                            a marked Gyomei and Sanemi from a
                                            distance.
                                        </small>
                                    </div>
                                    Kokushibo could easily keep up with the Wind
                                    Hashira's blistering speed and forms,
                                    despite Sanemi exerting himself to the limit
                                    in order to stay alive. He evaded a surprise
                                    attempt to stab him from below the chin by
                                    tilting his head back, and later on, when
                                    Sanemi used his brother's shotgun to shoot
                                    at the Upper Rank, Kokushibo is quick enough
                                    to block the pellets even when it is fired
                                    point-blank. After feeling the need to try
                                    harder, Kokushibo subdues the Wind Hashira
                                    with a single technique that he couldn't
                                    evade in time, delivering numerous cuts and
                                    slashes all across his body. Even against
                                    Gyomei Himejima, the strongest Hashira of
                                    the Taisho era, Kokushibo is still more than
                                    capable of keeping up with his highly
                                    unorthodox fighting style. Even after both
                                    Hashira became marked, an enraged Kokushibo
                                    could unleash attacks that even they
                                    couldn't fully react to and he handily
                                    outpaced them throughout their battle. His
                                    imperceptible speed posed such a threat to
                                    his opponents that Muichiro had to sacrifice
                                    a leg in order to stop the Upper Rank from
                                    moving so that Genya could fully immobilize
                                    him with his Blood Demon Art. After
                                    transforming, Kokushibo was able to move so
                                    fast, he appeared as a blur to a marked
                                    Gyomei and Sanemi when they attempt to
                                    finish him off.
                                </p>
                                <p>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/koku_foot.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo forces Sanemi and his
                                            sword onto the ground with his foot
                                            alone.
                                        </small>
                                    </div>
                                    <strong>Immense Strength: </strong>As a
                                    former Demon Slayer who has mastered Total
                                    Concentration Breathing and had gained the
                                    Demon Slayer Marks prior to becoming a
                                    demon, Kokushibo possesses immense physical
                                    strength, superior to that of all the other
                                    Upper Ranks. He is able to crack the ground
                                    just by stomping on Sanemi's sword and is
                                    capable of wielding a gigantic sword much
                                    heavier and longer than a regular katana and
                                    swinging it incessantly at incomprehensible
                                    speeds without rest or much effort. After
                                    transforming, Kokushibo was able to slice
                                    off Muichiro's arm with his bare hands, akin
                                    to a blade.
                                    <br />
                                    <br />
                                    <strong>
                                        Unlimited Stamina & Endurance:{" "}
                                    </strong>
                                    Like all demons, Kokushibo possesses
                                    virtually limitless stamina and vitality,
                                    never tiring and always remaining in optimal
                                    physical and mental condition all the time,
                                    as well as being able to endure waves of
                                    onslaught as if it were nothing. Despite
                                    having his limbs and whole chunks of his
                                    body repeatedly torn off and destroyed, he
                                    continues to heal and fight the Demon
                                    Slayers with little trouble. In fact, his
                                    only instances of expressly experiencing any
                                    discomfort in his battle are from Muichiro's
                                    bright red katana and Gyomei's
                                    sunlight-soaked flail burning his body from
                                    the inside and his neck respectively.
                                </p>
                            </div>
                        </section>
                        {/* Supernatural Abilities */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Supernatural Abilities
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Supernatural"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Supernatural_content"
                            >
                                <p>
                                    <strong>Extrasensory Perception: </strong>
                                    Kokushibo possesses honed sensory abilities
                                    that allow him to detect the presence of
                                    others outside his normal range of
                                    perception, as shown when he dodges Genya's
                                    gunshots and appears directly behind him
                                    despite Kokushibo looking in the opposite
                                    direction. Kokushibo also seemed to be able
                                    to keep track of the locations of his peers
                                    around the Infinity Castle, evident as he no
                                    longer felt Akaza's presence when he died.
                                </p>
                                <p>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/koku_aura.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo's presence intimidates
                                            Akaza.
                                        </small>
                                    </div>
                                    <strong>Menacing Aura: </strong>Kokushibo
                                    possesses a menacing and overwhelming
                                    presence that startled even Akaza, an
                                    extremely vindictive and aggressive demon
                                    that hated Kokushibo, into silence and
                                    temporarily made Muichiro Tokito, a Hashira
                                    who has faced and defeated Upper Rank Five
                                    on his own, temporarily lose the will to
                                    fight, causing his body to tremble
                                    uncontrollably.
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
}
