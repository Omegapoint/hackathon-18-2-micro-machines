package micromachines;

import javax.websocket.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.locks.ReentrantLock;

@javax.websocket.server.ServerEndpoint(value="/mm")
public class ServerEndpoint {
    private static Set<ServerEndpoint> serverEndpoints = new CopyOnWriteArraySet<>();

    private Session session;
    @OnOpen
    public void onOpen(Session session) {
        this.session = session;
        serverEndpoints.add(this);
        System.out.println("Open");
    }

    public Session getSession() {
        return session;
    }

    @OnMessage
    public void onMessage(Session session, String message) throws IOException {
        //session.getBasicRemote().sendText("'" + message + "'");
        System.out.println("OnMessage: '" + message + "'");

        serverEndpoints.stream().forEach(e -> {
            if (!e.getSession().getId().equals(this.getSession().getId())) {
                try {
                    System.out.println("Sending message to client ID " + e.getSession().getId());
                    e.getSession().getBasicRemote().sendText(message);
                } catch (IOException e1) {
                    // Basically ignore
                    e1.printStackTrace();
                }
            }
        });
    }

    @OnClose
    public void onClose(Session session) throws IOException {
        System.out.println("onClose");
    }

    @OnError
    public void onError(Session session, Throwable throwable) {
        System.out.println("onError");
    }
}
