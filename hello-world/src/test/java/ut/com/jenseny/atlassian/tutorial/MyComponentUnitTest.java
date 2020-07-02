package ut.com.jenseny.atlassian.tutorial;

import org.junit.Test;
import com.jenseny.atlassian.tutorial.api.MyPluginComponent;
import com.jenseny.atlassian.tutorial.impl.MyPluginComponentImpl;

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