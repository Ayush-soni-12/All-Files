#include <iostream>
using namespace std;

struct node {
    int data;
    node* next;
};

node* head = NULL;

void insertAtbegin() {
    node* ptr = new node();
    if (ptr == NULL) {
        cout << "list is overflow" << endl;
    } else {
        int n;
        cout << "enter element" << endl;
        cin >> n;
        ptr->data = n;
        ptr->next = head;
        head = ptr;
        cout << "element is inserted" << endl;
    }
}

void insertAtend() {
    node* ptr = new node();
    if (ptr == NULL) {
        cout << "list is overflow" << endl;
    } else {
        int n;
        cout << "enter element" << endl;
        cin >> n;
        ptr->data = n;
        ptr->next = NULL;
        
        if (head == NULL) {
            head = ptr;
        } else {
            node* temp = head;
            while (temp->next != NULL) {
                temp = temp->next;
            }
            temp->next = ptr;
        }
        cout << "element is inserted" << endl;
    }
}

void insertAtspecific(int x) {
    node* ptr = new node();
    if (ptr == NULL) {
        cout << "list is overflow" << endl;
    } else {
        int n;
        cout << "Enter element" << endl;
        cin >> n;
        ptr->data = n;
        
        node* temp = head;
        while (temp != NULL && temp->data != x) {
            temp = temp->next;
        }
        
        if (temp != NULL && temp->data == x) {
            ptr->next = temp->next;
            temp->next = ptr;
            cout << "element is inserted" << endl;
        } else {
            cout << "key is not found" << endl;
            delete ptr;  // Free unused memory
        }
    }
}

void display() {
    if (head == NULL) {
        cout << "list is empty mmm" << endl;
    } else {
        node* ptr = head;
        while (ptr != NULL) {
            cout << "element is " << ptr->data << endl;
            ptr = ptr->next;
        }
    }
}

void deleteAtbegin() {
    if (head == NULL) {
        cout << "list is empty" << endl;
    } else {
        node* ptr = head;
        head = head->next;
        delete ptr;
        cout << "element is deleted" << endl;
    }
}
void deleteAtend(){
    if (head == NULL){
        cout << "list is empty "<< endl;
    }
    else if(head->next==NULL){
        delete head;
        head=NULL;
         cout << "element is deleted" << endl;

    }else{
        node*ptr1=head;
       node*ptr2;
        while(ptr1->next!=NULL){
          ptr2=ptr1;     
            ptr1=ptr1->next;
        }
        ptr2->next=NULL;
        delete ptr1;
        cout << "element is deleted" << endl;
    
    }
}
void deleteAtspecific(int x){
   
          
}

int main() {
    insertAtbegin();
    insertAtbegin();
    insertAtbegin();
    display();
    // display();
    // inser]tAtend();
    // insertAtend();
    // display();
    // insertAtspecific(9);
    // display();
    deleteAtspecific(2);
    display();

    return 0;
}
