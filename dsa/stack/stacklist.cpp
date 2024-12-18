#include <stdio.h>
#include <stdlib.h>
#include <iostream>
using namespace std;

void push();
void pop();
void display();
struct stack {
    int data;
    struct stack *next;
};

struct stack *top = NULL;

int main() {
    int choice = 0;
    while (true) {
        cout << "\nEnter choice:" << endl;
        cout << "1. Push an element" << endl;
        cout << "2. Pop an element" << endl;
        cout << "3. Display elements" << endl;
        cout << "4. Exit" << endl;
        cin >> choice;

        switch (choice) {
            case 1:
                push();
                break;
            case 2:
                pop();
                break;
            case 3:
                display();
                break;
            case 4:
                cout << "Exiting" << endl;
                return 0;
            default:
                cout << "Enter a valid choice" << endl;
                break;
        }
    }

    return 0;
}

void push() {
    struct stack *ptr;
    ptr = new stack();
    if (ptr == NULL) {
        cout << "Stack overflow" << endl;
    } else {
        int n;
        cout << "Enter a number: ";
        cin >> n;
        ptr->data = n;
        ptr->next = top;
        top = ptr;
        cout << "element is push" << endl;
    }
}

void pop() {
    struct stack *ptr;
    if (top == NULL) {
        cout << "Stack underflow" << endl;
    } else {
        ptr = top;
        top = top->next;
        delete ptr;
        cout <<"element pop" << endl;
    }
}

void display() {
    struct stack *ptr;
    ptr = top;
    if (ptr == NULL) {
        cout << "Stack is empty" << endl;
    } else {
        cout << "Stack elements: ";
        while (ptr != NULL) {
            cout << ptr->data << " ";
            ptr = ptr->next;
        }
        cout << endl;
    }
}
