azar = 0

def on_gesture_screen_up():
    global azar
    azar = randint(0, 1)
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)
