#include <iostream>
using namespace std;
#define max_size 5

int front = -1;
int rear = -1;

int queue[max_size];

void insertion() {
    int n;
    cout << "Enter element: ";
    cin >> n;

    if (front == (rear + 1) % max_size) {
        cout << "Queue is overflow" << endl;
    } else if (front == -1 && rear == -1) { // Initial insertion
        front = 0;
        rear = 0;
        queue[rear] = n;
        cout << "Element inserted" << endl;
    } else {
        rear = (rear + 1) % max_size; // Update rear in a circular manner
        queue[rear] = n;
        cout << "Element inserted" << endl;
    }
}

void deletion() {
    if (front == -1 && rear == -1) { // Queue is empty
        cout << "Queue is underflow" << endl;
    } else if (front == rear) { // Single element in the queue
        cout << "The deleted element is " << queue[front] << endl;
        front = -1;
        rear = -1; // Reset to initial state
    } else {
        cout << "The deleted element is " << queue[front] << endl;
        front = (front + 1) % max_size; // Update front in a circular manner
    }
}

void display() {
    if (front == -1 && rear == -1) {
        cout << "Queue is empty" << endl;
    } else {
        cout << "Elements in the queue are: ";
        int i = front;
        while (true) {
            cout << queue[i] << " ";
            if (i == rear) break; // Stop when we reach the last element
            i = (i + 1) % max_size; // Move in a circular manner
        }
        cout << endl;
    }
}

int main() {
    display(); // Display initial empty queue
    insertion(); // Insert elements
    insertion();
    insertion();
    insertion();
    insertion();
    display(); // Display after insertions
    deletion(); // Delete elements
    deletion();
    deletion();
    display(); // Display after deletions
    return 0;
}
