#include <iostream>
using namespace std;

struct node {
    node* prev;
    int data;
    node* next;
};
node* head = NULL;

void insertAtbegin() {
    node* ptr = new node();
    int n;
    if (!ptr) {
        cout << "list is overflow" << endl;
    } else {
        cout << "Enter element" << endl;
        cin >> n;
        ptr->data = n;
        ptr->next = head;
        ptr->prev = NULL;
        if (head != NULL) {
            head->prev = ptr;
        }
        head = ptr;
        cout << "element is inserted" << endl;
    }
}

void insertAtend() {
    node* ptr = new node();
    int n;
    if (!ptr) {
        cout << "list is overflow" << endl;
    } else {
        cout << "Enter element" << endl;
        cin >> n;
        ptr->data = n;
        ptr->next = NULL;
        
        if (head == NULL) {
            ptr->prev = NULL;
            head = ptr;
        } else {
            node* temp = head;
            while (temp->next != NULL) {
                temp = temp->next;
            }
            temp->next = ptr;
            ptr->prev = temp;
        }
        cout << "element is inserted" << endl;
    }
}

void insertAtspecific(int x) {
    node* ptr = new node();
    int n;
    if (!ptr) {
        cout << "list is overflow" << endl;
    } else {
        cout << "Enter element" << endl;
        cin >> n;
        ptr->data = n;
        
        node* temp = head;
        while (temp != NULL && temp->data != x) {
            temp = temp->next;
        }
        if (temp != NULL && temp->data == x) {
            ptr->next = temp->next;
            ptr->prev = temp;
            if (temp->next != NULL) {
                temp->next->prev = ptr;
            }
            temp->next = ptr;
            cout << "element is inserted" << endl;
        } else {
            cout << "Element is not found" << endl;
        }
    }
}

void deleteAtbegin() {
    if (head == NULL) {
        cout << "list is underflow" << endl;
    } else {
        node* ptr = head;
        head = head->next;
        if (head != NULL) {
            head->prev = NULL;
        }
        delete ptr;
        cout << "element is deleted" << endl;
    }
}

void deleteAtend() {
    if (head == NULL) {
        cout << "list is underflow" << endl;
    } else if (head->next == NULL) {
        delete head;
        head = NULL;
        cout << "element is deleted" << endl;
    } else {
        node* ptr = head;
        while (ptr->next != NULL) {
            ptr = ptr->next;
        }
        ptr->prev->next = NULL;
        delete ptr;
        cout << "element is deleted" << endl;
    }
}

void deleteAtspecific(int x) {
    if (head == NULL) {
        cout << "list is underflow" << endl;
    } else {
        node* ptr = head;
        while (ptr != NULL && ptr->data != x) {
            ptr = ptr->next;
        }
        if (ptr != NULL && ptr->data == x) {
            if (ptr->prev != NULL) {
                ptr->prev->next = ptr->next;
            } else {
                head = ptr->next;
            }
            if (ptr->next != NULL) {
                ptr->next->prev = ptr->prev;
            }
            delete ptr;
            cout << "element is deleted" << endl;
        } else {
            cout << "Element not found" << endl;
        }
    }
}

void display() {
    if (head == NULL) {
        cout << "list is empty" << endl;
    } else {
        node* ptr = head;
        while (ptr != NULL) {
            cout << "element is " << ptr->data << endl;
            ptr = ptr->next;
        }
    }
}

int main() {
    insertAtbegin();
    insertAtbegin();
    insertAtbegin();
    insertAtbegin();
    insertAtbegin();
    display();
    deleteAtspecific(65);
    display();
    
    return 0;
}
