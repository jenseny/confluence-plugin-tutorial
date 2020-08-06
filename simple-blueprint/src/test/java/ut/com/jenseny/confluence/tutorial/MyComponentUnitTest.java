package ut.com.jenseny.confluence.tutorial;

import org.junit.Test;
import com.jenseny.confluence.tutorial.api.MyPluginComponent;
import com.jenseny.confluence.tutorial.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}