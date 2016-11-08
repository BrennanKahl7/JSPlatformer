var GAME_LEVELS = [
  ["                                                                xxxxxxxxx       ",
   "                                                              xxx!!!!!!!xxx     ",
   "                                                            xxx!!!!!!!!!!!xxx   ",
   "                                                            x!!!!!!!!!!!!!!!x   ",
   "   o                                                        xxxvxxxxvxxxxvxxx   ",
   "                                                                                ",
   "xxxxxxx                                                                         ",
   "xxxxxxx       xxxxx     x       x      x       x                                ",
   "xxxxxxx!!!!!!!xxxxx!!!!!x!!!!!!!x!!!!!!x!!!!!!!x                                ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                        ",
   "                                                             xxx                ",
   "                                                                                ",
   "                                                                   xxx          ",
   "                                                                                ",
   "                                                                         xxx    ",
   "                                                                                ",
   "                            xx!!!xx                                             ",
   "             x               xxxxx                 xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "            xx      xxx                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "    @      xxx                            xxx      xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxx                                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxx                                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                                  ",
   "                                                                                                                  ",
   "                                               xxxxxxx                                                            ",
   "                                             xxx     xx                                                           ",
   "                                            xx       xx        xxx                                                ",
   "  @                                         x       xx                                                            ",
   "xxxxx                                       xx                                                                    ",
   "xxxxx                                        xxxxxxxxxxxxx                                                     o  ",
   "xxxxx                                                    xx                                                       ",
   "xxxxx   xxx               xxx                             xxxx        xxxx                                 xxxxxxx",
   "xxxxx     =           =           =           =            x         xx  xx      xxx               xxx    xx      ",
   "xxxxx            xxx               xxx      xxxxxxxxxx     x    |  xxx    x               xxx             x       ",
   "xxxxx                                                x   xxx         x    x                               x       ",
   "xxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! x     x         x    x                               x       ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx! x     xxx       x    x                               x       ",
   "                                                  x! x     x         x    x                               x       ",
   "                                                  x! x   xxx         x                                    x       ",
   "                                                  x! x     x    |  xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x       ",
   "                                                 xxv x     x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x       ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx        x         xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx       ",
   "xx                                                         x         x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx        ",
   "x                                                          xxx       x                                            ",
   "x                                                          x         x                                            ",
   "x           =                     =                     = xx         x                                            ",
   "x       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     |    x                                            ",
   "x                                                                 xxxx                                            ",
   "x                                                                    x                                            ",
   "x                                                                    x                                            ",
   "xx          =                     =                     =           xx                                            ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                             ",
   "                                                                                                                  ",
   "                                                                                                                  "],
  ["                                                                                                                   ",
   "                                                                                                                   ",
   "                                                                                                                   ",
   "    @                                                                                                              ",
   "   xxxx     xxx                                   xxxx    xxxx                                               xxxx  ",
   "   v  xxx     xx                                 xxx        xxxxxxxxxxx                                    xxx     ",
   "      v xx     x                                xx            xx                                          xx       ",
   "         x     x                                x      o       x                                          x        ",
   "         x     x                                xx            xx           x                              x        ",
   "        xx     x                                 xxxxxxxxxxxxxxxxx         x                              xx       ",
   "       xx     xx                                                 xxx       x     x                         xx      ",
   "      xx     xx                                                    xxx     x     x                          xx     ",
   "     xx     xx                       xxxxxxxxxxxxxxxxxxxxxxxxxx      x     x     x     x                     xx    ",
   "     x     xx                      xxx              x         x      x     x     x     x                      x    ",
   "     x     x!!!!!!!!!xv                vx!!!!!!!!!!!x         x      x     x     x     x     x                x    ",
   "     x     x!!!!!!!!!x                  x!!!!!!!!!!!x         x      xxx!!!x!!!!!x!!!!!x!!!xxx                x    ",
   "     xxx|  x!!!!!!!!!x    xxxxxxxxxx    x!!!!!!!!!!!x         x        xxxxxxxxxxxxxxxxxxxxx                  x    ",
   "     x     x!!!!!!!!!x                  x!!!!!!!!!!!x         x                                    xxxxxxxxxxxx    ",
   "     x     x!!!!!!!!!x                  x!!!!!!!!!!!x         x                                               x    ",
   "     x     x!!!!!!!!!xxxx |        | xxxx!!!!!!!!!!!x         x                        |                      x    ",
   "     x     x!!!!!!!!!x                  x!!!!!!!!!!!x         x                          xxxxx                x    ",
   "     x     x!!!!!!!!!x                  x!!!!!!!!!!!x         x                                               x    ",
   "     x     x!!!!!!!!!x    xxxxxxxxxx    x!!!!!!!!!!!x         x                                               x    ",
   "     x   xxxxxxxxxxxxx                  xxxxxxxxxxxxx         x                xxxxx                          x    ",
   "     x     x                                        x         x                                               x    ",
   "     x     x                                        x         x                                               x    ",
   "     x  |  x        xxxxxx          xxxxxx          x         xxxxxxxxxxxx   |                                x    ",
   "     x     x                                        x         x                                               x    ",
   "     x     x                                        x         x                                               x    ",
   "     x     x                xxxxxx                  x         x                                               x    ",
   "     x     xx         =                =            x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x    ",
   "     xx     xx                                     xx         xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx    ",
   "      xx     xx     xxxxx            xxxxx        xx           xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     ",
   "       xx     xx                                 xx             xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx      ",
   "        xx     xx                               xx               xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx       ",
   "         xx     x           xxxxxx             xx                 xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx        ",
   "          x     x                              x                   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x         ",
   "        xxx                                    xxx               xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxx       ",
   "      xxx                                        xxx           xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxx      ",
   "    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    "],
  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;