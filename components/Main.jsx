export default function Main() {
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
                    <div>
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

                    <div className="grid grid-cols-1 gap-1">
                        <p>
                            Kokushibo (黒こく死し牟ぼう Kokushibō?) is a major
                            supporting antagonist of Demon Slayer: Kimetsu no
                            Yaiba. He is a demon affiliated with the Twelve
                            Kizuki, holding the highest position, Upper Rank One
                            (上じょう弦げんの壱いち Jōgen no Ichi?).
                        </p>
                        <p>
                            Nearly five centuries ago during the Sengoku Era,
                            Kokushibo was a human by the name of Michikatsu
                            Tsugikuni (継つぎ国くに 巌みち勝かつ Tsugikuni
                            Michikatsu?), a former Demon Slayer, and the older
                            twin brother of Yoriichi Tsugikuni, the strongest
                            Demon Slayer to ever live.
                        </p>
                        <p>
                            Kokushibo is also the ancestor of Muichiro Tokito
                            and Yuichiro Tokito, and is responsible for turning
                            Zenitsu Agatsuma's senior, Kaigaku, into a demon,
                            who then defected to the Twelve Kizuki as the new
                            Upper Rank Six.
                        </p>
                    </div>
                </section>
                {/* Table Section */}
                <section className="grid grid-cols-1 gap-y-2">
                    <div className="grid grid-cols-2 gap-x-2">
                        <table>
                            <tr className="text-center bg-black text-lg">
                                <td colSpan={4}>Names</td>
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
                                <td colSpan={3}>Affiliation</td>
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
                            <td colSpan={7}>Characteristics</td>
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
                                <td colSpan={2}>Debuts</td>
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
                                <td colSpan={3}>Portrayal</td>
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
                            <td colSpan={2}>Personal Status</td>
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
                <section className="grid grid-cols-1 gap-2">
                    <div>
                        <h2 className="text-xl font-comic">Appearance</h2>
                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <p>
                            Kokushibo is a tall man of muscular build and pale skin
                        complexion. He possesses long, spiky black hair with red
                        tips that he kept in a ponytail, along with two
                        shoulder-length, flowing, wavy bangs on each side that
                        reached to his collarbone. His most notable features are
                        the three sets of eyes on his face with yellow irises
                        and red flesh sclera that have black, straight lines
                        diverging from each iris. His middle set of eyes have
                        the kanji of "Upper Rank (上じょう弦げん Jōgen?)" on
                        engraved on his left eye, and daiji for "One (壱いち
                        Ichi?)" on his right. His other sets of eyes feature
                        black pupils and a cracked pattern in the irises. His
                        top set of eyes replaced his eyebrows. Kokushibo also
                        possesses flame-like Demon Slayer Marks on the top left
                        side of his forehead that extended down to his left
                        temple, and the bottom right of his cheek that extended
                        down to his neck. His appearance was described as
                        profound and majestic by Muichiro Tokito.
                    </p>
                    <p>
                        Kokushibo adorned a purple-and-black hexagonal-patterned
                        nagagi kimono and black umanori-styled hakama pants tied
                        with a white uwa-obi. He also wore a pair of zōri with
                        purple straps, and white tabi socks. He carried a fleshy
                        katana at his waist that has eyes in the space between
                        the tsuka ito wrapping of the handle of his sword. The
                        tsuba and blade were shown to have eyes and veins. The
                        scabbard was also fleshy in appearance.
                    </p>
                    <p>
                        As a human, Kokushibo's look was almost identical to his
                        demon form, except for the number of eyes, his eminent
                        eyebrows, and his less paler skin. His eyes had maroon
                        irises and normal, white sclera. As a child, he was
                        normally seen wearing a white kimono, as opposed to the
                        purple-and-black-patterned one he's seen wearing as an
                        adult. He also tied his hair in a short ponytail, unlike
                        Yoriichi, who wore his loose.
                    </p>
                    <p>
                        Due to being identical twins, Kokushibo greatly
                        resembled his younger brother Yoriichi. However, besides
                        their clothing, the biggest way to distinguish the twins
                        was their hair texture; Kokushibo has spikier and
                        thicker hair in comparison to his brother's thinner and
                        curlier hair.
                    </p>
                    <p>
                        After being beheaded by Sanemi Shinazugawa and Gyomei
                        Himejima, Kokushibo evolved into a more grotesque and
                        monstrous form, with protruding fangs and mandibles,
                        large, uneven white horns on the front and back of his
                        head, pointed nails, and red outgrowths on his face. His
                        eyes were looking in multiple directions, and his hair
                        was shorter and messier. He had several thin tubes
                        poking out of his body and pinkish-red tendrils on his
                        back, along with numerous black and red scorpion
                        tail-like appendages haphazardly sprouting all across
                        his entire body.
                    </p>
                </section>
            </main>
        </>
    );
}
