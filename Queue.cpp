#include <bits/stdc++.h>
using namespace std;

class Queue {
private:
    stack<int> st1;
    stack<int> st2;

public:
    void enqueue(int val) {
        st1.push(val);
    }

    int dequeue() {
        if (st1.empty() && st2.empty()) {
            return -1;
        }

        if (st2.empty()) {
            while (!st1.empty()) {
                int top = st1.top();
                st1.pop();
                st2.push(top);
            }
        }

        int front = st2.top();
        st2.pop();
        return front;
    }

    bool isEmpty() {
        return (st1.empty() && st2.empty());
    }
};

int main() {
    Queue queue;

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    cout << "Deque: " << queue.dequeue() << endl;

    queue.enqueue(40);
    queue.enqueue(50);

    while (!queue.isEmpty()) {
        cout << "Deque: " << queue.dequeue() << endl;
    }

    return 0;
}
// TC -> O(1) for pushing and popping