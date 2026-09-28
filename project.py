import calendar


def getc(year, month):
    return calendar.month(year, month)


def menu():
    print("\nCALENDAR ")
    print("1.View Calendar")
    print("2.Add Event")
    print("3.View Events")
    print("4.Exit")
    s = input("Choose an option: ")
    return s


def event(date, note):
    return f"[{date}] - {note}"

def sd(text):
    f_obj= open("notes.txt", "a")
    f_obj.write(text + "\n")
    f_obj.close() 


def rd():
        f = open("notes.txt", "r")
        c = f.read()
        f.close()
        return c

def run():
    ru = True
    while ru:
        choice = menu()
        
        if choice == "1":
            y = int(input("Enter Year (e.g., 2026): "))
            m = int(input("Enter Month (1-12): "))
            print("\n" + getc(y, m))   
        elif choice == "2":
            d = input("Enter Date (e.g., 15-Oct): ")
            n = input("Enter your note: ")
            
            ft = event(d, n)
            sd(ft)
            print("Saved!")
            
        elif choice == "3":
            print("\n--- YOUR EVENTS ---")
            e= rd()
            print(e)
            
        elif choice == "4":
            print("Goodbye!")
            ru = False 
        else:
            print("Invalid choice. Try again please.")

if __name__ == "__main__":
    run()