package micromachines;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.awt.image.BufferedImage;
import java.io.*;
import java.net.URL;
import java.util.LinkedList;
import java.util.List;

import javax.imageio.ImageIO;

public class ImageConverter
{
    public static void main(final String args[])
            throws IOException
    {

        //final File file = new File("c:\\example.bmp");
        String mapName = "map1";

        URL url = Thread.currentThread().getContextClassLoader().getResource("map1" + ".png");
        //String outputFileName = url.getFile().replace(".png", ".map");
        //Writer output = new FileWriter(outputFileName);
        final BufferedImage image = ImageIO.read(url);

        List<List<Integer>> map = new LinkedList<>();


        for (int y = 0; y < image.getHeight(); y++) {
            List<Integer> row = new LinkedList<>();
            map.add(row);
            for (int x = 0; x < image.getWidth(); x++) {
                final int clr = image.getRGB(x, y);
                final int red = (clr & 0x00ff0000) >> 16;
                final int green = (clr & 0x0000ff00) >> 8;
                final int blue = clr & 0x000000ff;
                int value = 0;
                if (red == 255 && blue == 255 && green == 255) {
                    // WHITE
                    value = 0;
                    //System.out.print("0");
                } else if (red == 0 && blue == 0 && green == 0) {
                    // BLACK
                    value = 1;
                    //System.out.print("1");
                } else if (red == 255 && blue == 255 && green == 0) {
                    // RED+BLUE
                    value = 2;
                    //System.out.print("2");
                } else if (red == 0 && blue == 255 && green == 255) {
                    // GREEN+BLUE
                    value = 3;
                   // System.out.print("3");
                } else if (red == 255 && blue == 0 && green == 255) {
                    // RED+GREEN
                    value = 4;
                    //System.out.print("4");
                } else if (red == 255 && blue == 0 && green == 0) {
                    // RED
                    value = 5;
                   // System.out.print("5");
                } else if (red == 0 && blue == 0 && green == 255) {
                    // GREEN
                    value = 6;
                   // System.out.print("6");
                } else if (red == 0 && blue == 255 && green == 0) {
                    // BLUE
                    value = 7;
                   // System.out.print("7");
                } else {
                    System.out.println ("UNKNOWN VALUE: r:" + red + ", g:" + green + ", b: " +blue);
                    System.exit(1);
                }
                row.add(value);

                //if (y != image.getHeight()) {
                //    System.out.print(",");
               // }
                //System.out.print (red + "," + green + "," + blue + ":");
                // Color Red get cordinates
                /*if (red == 255) {
                    System.out.println(String.format("Coordinate %d %d", x, y));
                } else {
                    System.out.println("Red Color value = " + red);
                    System.out.println("Green Color value = " + green);
                    System.out.println("Blue Color value = " + blue);
                }*/
            }
            System.out.println();
        }
        Gson gson = new Gson();

        String json = gson.toJson(map);
        //json = json.replace("],", "],\n");
        //output.write(json);
        System.out.println(json);
        //output.close();
    }

}