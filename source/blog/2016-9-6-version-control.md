* Short tutorial (More learnings below)
* What is version control
* Why use version control
  * Overhead / flexibility / technical debt
  * Possible use cases

## Using Git
Even though there are a plethora of git tutorials out there, learning to use Git
can still be a harrowing experience. Generally after you gain a working understanding,
you quickly repress memories of your humble beginnings, when your nightmares were
plagued by merge conflicts. The following is designed to be a short and sweet guide
to get you up and Git-ing with a minimum of tears.

Git is a complex beast, and we will be neglecting many of those complexities for the
sake of putting together a succinct guide for a basic, no frills, peanut butter and
jelly, plain Jane, git workflow.

Understanding a bit of what is going on behind the scenes of git can help any new
git-er make sense of the sequence in which git commands are usually used. We will
briefly the three core parts of git. Introducing the working tree, committed directory,
and the staging area. Each plays a role in keeping your code safe and sound.

After we initialize a git repository `git init`, none of our files have been added
to our committed directory or staging area. All files therefore start on the working tree.
If you add a file to your project it gets added to the working tree. When you write code,
or are editing existing code you are making your changes on the working tree. You can
think of the working tree as a sandbox where you can add new files, change files that
already exist in the committed directory, and try things out. You can have the ability
to reset the already tracked files in the working tree to the previous commit with
 `git reset --hard`.

Next we will discuss the heart and soul of git, the committed directory. The goal
of writing code is to eventually land it on in the committed directory. Code that is
in the committed directory has, as the name might suggest, been committed. Committing
code means that a snapshot has been made of the code at a certain point in time, and
we can forever more go back (revert) to that point if we wish.

The next component, the staging area, is what often trips up beginners. Beginners often
think they can take files from the working tree and directly commit them. This is not the case.
Files can only be added from the working tree to the committed directory, that is to say
that you can only 'commit' files that have been added to the working tree. The working tree
gives you the ability to only commit a portion of the changes you have made at once.

Now that we at least have a partial understanding of the working tree, staging area, and
committed directory we can make better sense of why the following commands are necessary.

Imagine we are working on our project, we have been working for a few hours and have gotten
lots of stuff done. We are more sure about some of our work than other parts of it however. Maybe
some of it will have to go back to how it was before we started messing with it.

Enter, the git workflow.

We are excited about the coolest most hip new language called cool-lang. We introduced
a small bit of cool-lang into our c++ project, but we aren't sure what the big boss has
to say about cool-lang just yet.

Let's seperate the work we have done, so if we have to yank out the cool-lang later on,
and replace it with boring stupid c++ then it will be less painful later on.

Lets commit our c++ work first, that probably isn't going anywhere.
`git add real_work.cpp more_actual_work.cpp`
Now we have added our cpp files to the staging area.
`git commit -m 'did some real work in c++'`
Now we commit the files from the staging area to the committed directory.

Now.. for the cool-lang. This might have to go later, and now we can just revert to
right before we committed all of our cool-lang if we need to get rid of it later.

`git add sooo_cool.cool-lang much_cool_indeed.cool-lang`

Now we have added our cool lang to staging area.

`git commit -m 'added cool lang!'`

Now we have committed all of our code. And if we need to revert to the commit right before
adding the cool lang, it will be real slick and easy.
